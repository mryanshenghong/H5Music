// initialize current page
var current = 'browse'
// play mode
var currentPlayMode = 'normal'

var playerHide = true
// player setup
var player = document.getElementById('player')

var isStop = true
// music list
var currentIndex = 0
var allTracks = [
  {
    img: './img/songsImg/faded.jpg',
    url: './songs/song1.mp3',
    name: 'Faded',
    singer: 'Alan Walker',
    album: 'Different World',
    duration: '3:33',
  },
  {
    img: './img/songsImg/autumn.jpg',
    url: './songs/song2.mp3',
    name: 'Autumn Leaves',
    singer: 'Unknown',
    album: 'Instrument',
    duration: '7:01',
  },
  {
    img: './img/songsImg/slamdumk.jpg',
    url: './songs/song3.mp3',
    name: 'Slam Dumk',
    singer: 'Unknown',
    album: 'Instrument',
    duration: '2:37',
  },
  {
    img: './img/songsImg/cherry.jpg',
    url: './songs/song4.mp3',
    name: 'Cherry blossom time',
    singer: 'Kotaro Oshio',
    album: 'Unknown',
    duration: '3:39',
  },
  {
    img: './img/songsImg/lovesong.jpg',
    url: './songs/song5.mp3',
    name: '情歌',
    singer: '梁静茹',
    album: '静茹&情歌',
    duration: '4:18',
  },
]

player.src = allTracks[currentIndex].url

/*
	show current page 
*/

function showCurrentPage(currentPage) {
  switchCurrentPageName(currentPage)
  let pageArr = document.getElementsByClassName('page')
  for (item of pageArr) {
    item.style.display = 'none'
  }
  let current = document.getElementById(currentPage)
  if (current) {
    current.style.transform = 'scale(0)'
    current.style.display = 'block'
    setTimeout(() => {
      current.style.transform = 'scale(1)'
    }, 300)
  }
}

function switchCurrentPageName(currentPageName) {
  if (!playerHide) hidePlayer()
  document.getElementById('currentPageName').innerText = currentPageName.toUpperCase()
}

showCurrentPage(current)

function getClass(className) {
  return document.getElementsByClassName(className)[0]
}

function getId(idName) {
  return document.getElementById(idName)
}
