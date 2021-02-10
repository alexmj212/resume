'use strict';

import * as DarkMode from "./dark-mode.js";
import * as Sidebar from "./sidebar/sidebar.js";
import * as Header from "./header/header.js";
import * as Profile from "./profile/profile.js";
import * as Education from "./education/education.js";
import * as Skills from "./skills/skills.js";
import * as Portfolio from "./portfolio/portfolio.js";
import * as Resume from "./resume/resume.js";
import "./main.scss";

DarkMode.initializeThemeDetection();

export const pages = [
    'header-page',
    'profile-page',
    'education-page',
    'skills-page',
    'portfolio-page',
    'resume-page'
];

export let currentPage = 'header-page';

export function nextPage() {
    let nextPage = pages.indexOf(currentPage) + 1;
    if (nextPage < pages.length) {
        navigate(document.getElementById(pages[nextPage] + '-nav'));
    }
}

export function updateCurrentPage(page) {
    currentPage = page;
}

export function resetNavIndicator() {
    [...document.getElementsByClassName('nav-item')].forEach(element => {
        element.classList.remove('is-active');
    });
}

// window.addEventListener('scroll', () => {
//     var windscroll = window.scrollY;

//     resetNavIndicator();

//     if (windscroll >= document.getElementsByTagName('resume-page')[0].offsetTop) {
//         document.getElementById('resume-page-nav').classList.add('is-active');
//         updateCurrentPage('resume-page');
//         return;
//     }

//     if (windscroll >= document.getElementsByTagName('portfolio-page')[0].offsetTop) {
//         document.getElementById('portfolio-page-nav').classList.add('is-active');
//         updateCurrentPage('portfolio-page');
//         return;
//     }

//     if (windscroll >= document.getElementsByTagName('skills-page')[0].offsetTop - offsetThreshold) {
//         document.getElementById('skills-page-nav').classList.add('is-active');
//         updateCurrentPage('skills-page');
//         return;
//     }

//     if (windscroll >= document.getElementsByTagName('education-page')[0].offsetTop - offsetThreshold) {
//         document.getElementById('education-page-nav').classList.add('is-active');
//         updateCurrentPage('education-page');
//         return;
//     }

//     if (windscroll >= document.getElementsByTagName('profile-page')[0].offsetTop - offsetThreshold) {
//         document.getElementById('profile-page-nav').classList.add('is-active');
//         updateCurrentPage('profile-page');
//         return;
//     }

//     if (windscroll >= document.getElementsByTagName('header-page')[0].offsetTop - offsetThreshold) {
//         document.getElementById('header-page-nav').classList.add('is-active');
//         updateCurrentPage('header-page');
//         return;
//     }

// });

window.scroll();
resetNavIndicator();
