const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// Button Click Script

btn.addEventListener('click',function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }
    else{
        btn.classList.remove('slide');
        video.play();
    }
});

// Load event fires when all the stylesheets and whole page has been loaded...

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
});