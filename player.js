player.oncanplay = function() {
	generateSongInfo()
	var duration_m = Math.floor(this.duration / 60);
	var duration_s = (this.duration - duration_m * 60).toFixed(0);
	document.getElementById('duration').innerText = duration_m + ':' + ((duration_s < 10) ? '0' + duration_s : duration_s);
}
timeListener = player.addEventListener('timeupdate', shouCurrentTime)
endedListener = player.addEventListener('ended', resetPlayer)

function hidePlayer() {
	var playerMax = document.getElementById('player-max');
	var playerMin = document.getElementById('player-min');
	if (!playerHide) {
		playerMax.style.transform = 'scale(0)';
		playerMin.style.transform = 'scale(1)';
		playerHide = true;
	} else {
		playerMax.style.transform = 'scale(1)';
		playerMin.style.transform = 'scale(0)';
		playerHide = false;
	}
}


function playSong(index) {
	if(index === undefined || index === currentIndex) {
		isStop ? player.play() : player.pause()
		playState(isStop);		
	}else {
		playState(false);
		currentIndex = index;
		generateSongInfo();
		player.src = allTracks[index].url;
		playSong();
	}
	renderPlayList()
}

function resetPlayer() {
	this.currentTime = 0;
	getClass('album-img').classList.remove('img-playing');
	getClass('album-img-min').classList.remove('img-playing');
	getId('playBtnImg').src = './img/play.svg';
	next();
}

function shouCurrentTime() {
	let duration = this.duration
	var tik = this.currentTime
	let ratio = tik / duration
	let totalWidth = getClass('progress-bar').clientWidth
	getClass('bar-control').style.left = ((totalWidth * ratio) - 5) + 'px'
	var current_m = parseInt(tik / 60);
	var current_s = parseInt(tik % 60);
	document.getElementById('currentTime').innerText = current_m + ':' + ((current_s < 10) ? '0' + current_s : current_s);
}

function playState(flag) {
	if (flag) {
		isStop = false
		getClass('album-img').classList.add('img-playing');
		getClass('album-img-min').classList.add('img-playing');
		getId('playBtnImg').src = './img/pause.svg';
	} else {
		isStop = true
		getClass('album-img').classList.remove('img-playing');
		getClass('album-img-min').classList.remove('img-playing');
		getId('playBtnImg').src = './img/play.svg'
	}
}

function generateSongInfo() {
	getId('header-background-img').src = allTracks[currentIndex].img;
	getClass('album-img').src = allTracks[currentIndex].img;
	getClass('album-img-min').src = allTracks[currentIndex].img;
	getId('nameAndSinger').innerText = allTracks[currentIndex].name + '-' + allTracks[currentIndex].singer;
	getId('album').innerText = allTracks[currentIndex].album;
}


function next() {
	playState(false);
	if(currentPlayMode === 'normal') {
		if(currentIndex === allTracks.length -1) {
			currentIndex = 0;
		}else {
			currentIndex++;
		}
	} else if(currentPlayMode === 'random') {
		currentIndex = generateRandomIndex(currentIndex);
	}
	player.src = allTracks[currentIndex].url;
	playSong();
}

function generateRandomIndex(currentIndex) {
	var newIndex = Math.ceil(Math.random() * allTracks.length -1)
	if(newIndex === currentIndex) {
		generateRandomIndex(newIndex);
	}else {
		return newIndex;
	}
}

function prev() {
	playState(false);
	if(currentPlayMode==='normal'){
		if(currentIndex === 0){
			currentIndex = allTracks.length -1;
		}else {
			currentIndex --;
		}		
	}else if(currentPlayMode === 'random') {
		currentIndex = Math.ceil(Math.random() * allTracks.length -1)
	}
	player.src = allTracks[currentIndex].url;
	playSong()
}

function changeMode(playMode) {
	let notice = getId('notification');
	if(currentPlayMode === playMode) {
		currentPlayMode = 'normal'
	}else {
		currentPlayMode = playMode;
	}
	notice.innerText = `Play Mode: ${currentPlayMode}`;
	notice.style.top = '0';
	setTimeout(function() {
		notice.style.top = '-45px';
	},1000)
}