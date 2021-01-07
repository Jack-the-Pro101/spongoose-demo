'use strict';

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const spongooseYT = 'https://www.youtube.com/spongoose'

const about = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');
const youtube = document.getElementById('youtube');
const youtubeBtn = document.getElementById('youtubeBtn');
const discord = document.getElementById('discord');
const discordBtn = document.getElementById('discordBtn');

setInterval(function() {
    isInViewport(about) ?
        aboutBtn.classList.add('navbar-list__item--selected') :
        aboutBtn.classList.remove('navbar-list__item--selected');

    isInViewport(youtube) ?
        youtubeBtn.classList.add('navbar-list__item--selected') :
        youtubeBtn.classList.remove('navbar-list__item--selected');

    isInViewport(discord) ?
        discordBtn.classList.add('navbar-list__item--selected') :
        discordBtn.classList.remove('navbar-list__item--selected');
}, {
    passive: true
},250);

var currentTheme = 'dark';
document.getElementById('themeBtn').addEventListener('click',function()
{
    if (currentTheme == 'dark')
    {
        document.getElementById('main1').className = '--themelight-main';
        document.getElementById('main2').className = '--themelight-main';
        document.getElementById('main3').className = '--themelight-main';
        document.querySelector('.parallax-wrapper').classList.add('parallax-wrapper--themelight');
        document.getElementById('themeBtn').innerHTML = '<i class="fas fa-moon"></i>';
        currentTheme = 'light';
    }else if (currentTheme == 'light')
    {
        document.getElementById('main1').className = '';
        document.getElementById('main2').className = '';
        document.getElementById('main3').className = '';
        document.querySelector('.parallax-wrapper').classList.remove('parallax-wrapper--themelight');
        document.getElementById('themeBtn').innerHTML = '<i class="fas fa-sun"></i>';
        currentTheme = 'dark';
    };
})