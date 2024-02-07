const alagAudio = new Audio('./sound/alag.mp3');
const boloAudio = new Audio('./sound/bolo.mp3');
const husnAudio = new Audio('./sound/husn.mp3');
const pehleAudio = new Audio('./sound/pehle.mp3');
const satAudio = new Audio('./sound/sat.mp3');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');

const songs = [
  { ele: alagAudio, audioName: 'Alag Aaasmaan by Anuv Jain' },
  { ele: boloAudio, audioName: 'Bolo Na from 12th Fail' },
  { ele: husnAudio, audioName: 'Husn by Anuv Jain' },
  { ele: pehleAudio, audioName: 'Pehle Bhi Main from Animal' },
  { ele: satAudio, audioName: 'Satranga from Animal' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click', () => {
  playPauseSong();
});

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playSong(current);
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playSong(current);
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}

const volumeSlider = document.getElementById('volume');
volumeSlider.addEventListener('input', function() {
  const volume = this.value / 100;
  currentSong.volume = volume;
});

function changeBackgroundColor() {
  let red = Math.floor(Math.random() * 128) + 128;
  let green = Math.floor(Math.random() * 128) + 128;
  let blue = Math.floor(Math.random() * 128) + 128;

  let bgColor = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = bgColor;
}

changeBackgroundColor();
function playSong(index) {
  if (!currentSong.paused) {
    currentSong.pause();
  }
  current = index;
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
  currentSong.play();
  playPauseIcon.className = 'ph-bold ph-pause';
  changeBackgroundColor();
}

setInterval(changeBackgroundColor, 10000); //10000 ms = 10s

function playSong(index) {
  if (!currentSong.paused) {
    currentSong.pause();
  }
  current = index;
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
  
  const imageElement = document.querySelector('.image img');
  switch (current) {
    case 0:
      imageElement.src = 'https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg';
      break;
    case 1:
      imageElement.src = 'https://th.bing.com/th/id/OIP.LFnMSKZpyYqz9sbsjEHrxgHCFn?rs=1&pid=ImgDetMain';
      break;
    case 2:
      imageElement.src = 'https://cdn.telanganatoday.com/wp-content/uploads/2023/12/Husn.png';
      break;
    case 3:
      imageElement.src = 'https://www.filmibeat.com/ph-big/2023/01/animal-2023_167264941510.jpg';
      break;
    case 4:
      imageElement.src = 'https://cdn.tollywood.net/wp-content/uploads/2023/10/Animal-movie-lengthy-with-2-intervals-jpg.webp';
      break;
    default:
      imageElement.src = 'https://1.bp.blogspot.com/-rtBmzwKIitU/Xz5N8fvgoOI/AAAAAAAACsM/YMXVuBuubysEuHJZVtgxr23zSrK67nM8gCLcBGAsYHQ/s1600/Art.jpg';
  }

  currentSong.play();
  playPauseIcon.className = 'ph-bold ph-pause';
  changeBackgroundColor();
}
