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

const btnBack = document.querySelector('.btn-back')
const btnNext = document.querySelector('.btn-next')
const serviceBody = document.querySelector('.service-body')
const serviceList = serviceBody.querySelector('.service__list').querySelectorAll('.service-item')
let index = 0;
btnNext.addEventListener('click', () => {
    if (index < serviceList.length - 1) {
        index++;
    }
    serviceList.forEach(serviceItem => {
        serviceItem.style.transform = `translateX(${-index * 100}%)`
    })
})

btnBack.addEventListener('click', () => {
    if (0 < index && index <= serviceList.length - 1) {
        index--;
    }
    serviceList.forEach(serviceItem => {
        serviceItem.style.transform = `translateX(${-index * 100}%)`
    })
})

const menuDrawer = document.querySelector('.header__menu-drawer')
const footerDrawer = document.querySelector('.footer__menu-drawer')
const footerRow = document.querySelector('.footer__row')
const navbar = document.querySelector('.navbar')
menuDrawer.innerHTML = navbar.innerHTML
footerDrawer.innerHTML = footerRow.innerHTML