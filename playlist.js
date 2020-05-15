function renderPlayList() {
	const playlistSongs = getId('playlist-list');

	var template = ''
	allTracks.forEach(function(item,index) {
			template +=
				`                   
	            <div class="song">
	                <div class="left">
	                    <h3 class="song-name">${item.name}</h3>
	                    <p class="singer-name">${item.singer}</p>
	                </div>
	                <div class="right">
	                    <img 
		                    class="song-control" 
		                    onClick="playSong(${index})" 
		                    src="${currentIndex === index ? isStop ? './img/play.svg':'./img/pause.svg':'./img/play.svg'}"
		                    alt="pause"
	                    >
	                </div>                        
	            </div>
				`

		})

	playlistSongs.innerHTML = template;
}

renderPlayList()
