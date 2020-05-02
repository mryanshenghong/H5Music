function loadData() {
	let loadingWrapper =
		`                    
	<div class="loadingWrapper">
          <img class="loading" src='./img/loading.svg'>
     </div> 
     `;
	var div = getId('dataList')
	div.innerHTML = loadingWrapper;

	var template = '';
	data.forEach(function(item) {
		template +=
			`                   
			<div class="song">
	            <div>
	                <img class="song-img" src=${item.pic} alt="songPic">
	            </div>
	            <div class="song-info">
	               <h3 class="song-name">
	                   	${item.name}
	                </h3>
	                <p class="singer-name">${item.artist}</p>  
	            </div>                        
	        </div>
			`

	})

	setTimeout(function() {
		div.innerHTML = template;
	}, 3000)

}

window.onload = function(){
	loadData()
}


var data = [{
	"pic": "http://p1.music.126.net/wvnIU5Rf3Ty1MnqaBXfY5Q==/109951164839904183.jpg",
	"name": "有一件美好的事情将要发生",
	"artist": "周深"
}, {
	"pic": "http://p1.music.126.net/sHGpFM_nB61mOQo1IEr2uw==/109951164840781495.jpg",
	"name": "你的色彩",
	"artist": "声入人心男团 Super Vocal"
}, {
	"pic": "http://p1.music.126.net/AqZeiCIehJg5oD1tcb42Zg==/109951164839030963.jpg",
	"name": "Better Days",
	"artist": "OneRepublic"
}, {
	"pic": "http://p1.music.126.net/A_1yN6JfaEoLixhl-3yBIg==/109951164833209811.jpg",
	"name": "朋友请听好 (谢娜版)",
	"artist": "谢娜"
}, {
	"pic": "http://p1.music.126.net/kvsbIMsDbA9-UHKk748KTQ==/109951164840870993.jpg",
	"name": "Digital Lover (GRAY ver.)",
	"artist": "Gray"
}, {
	"pic": "http://p1.music.126.net/vKfujmFCW3_2_UDr9E95kQ==/109951164833809104.jpg",
	"name": "晚安吧，太阳",
	"artist": "金玟岐"
}, {
	"pic": "http://p1.music.126.net/bZxfyuY58soD71VGxv6BDQ==/109951164814715844.jpg",
	"name": "100 Ways",
	"artist": "王嘉尔"
}, {
	"pic": "http://p1.music.126.net/cfC3HLKxf-bNpIcZHq9o7A==/109951164824421760.jpg",
	"name": "谜",
	"artist": "艾福杰尼"
}, {
	"pic": "http://p1.music.126.net/-EV4XhJEJn_Ib7ebS1OHhg==/109951164820593469.jpg",
	"name": "有可能的夜晚 (Live)",
	"artist": "周深"
}, {
	"pic": "http://p1.music.126.net/-EV4XhJEJn_Ib7ebS1OHhg==/109951164820593469.jpg",
	"name": "Last Dance (Live)",
	"artist": "徐佳莹"
}]

