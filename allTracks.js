
function renderAllTrackList() {
    const allTracksList = getId('allTracksList');

    var template = ''
    allTracks.forEach(function(item,index) {
            template +=
                `                   
                        <div class="song" onClick="playSong(${index})">
                            <div class="left">
                                <h3 class="song-name">
                                    ${item.name}
                                </h3>
                                <p class="singer-name">${item.singer}</p>                            
                            </div>
                            <div class="right">
                                <div class="song-control">${item.duration}</div>
                            </div>                        
                        </div> 
                `

        })

    allTracksList.innerHTML = template;
}

renderAllTrackList()