const navarLink = document.querySelectorAll('.navbar__link')
navarLink.forEach(link => {
    link.addEventListener('click', (e) => {
        navarLink.forEach(link => {
            link.classList.remove('navbar__link--active')
        })
        e.target.classList.add('navbar__link--active')
    })
})

const video = document.querySelector('video')
let isPlay = false
const playBtn = document.querySelector('.video__play-btn')
playBtn.addEventListener('click', () => {
    if (isPlay) {
        isPlay = false;
        video.pause();
        playBtn.innerHTML=''
        playBtn.innerHTML='<img src="./assets/icons/play_video.svg" alt="play-icon">'
    }
    else {
        isPlay = true;
        video.play();
        playBtn.innerHTML = ''
        playBtn.innerHTML='<img src="./assets/icons/pause_video.svg" alt="play-icon" class="video__pause-icon">'
    }
})
