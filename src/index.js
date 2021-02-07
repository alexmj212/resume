'use strict';

import * as DarkMode from "./dark-mode.js";
import "./sidebar/sidebar.js";
import "./header/header.js";
import "./profile/profile.js";
import "./education/education.js";
import "./skills/skills.js";
import "./portfolio/portfolio.js";
import "./resume/resume.js";
import "./sidebar/sidebar.js";
import "./main.scss";

DarkMode.initializeThemeDetection();

// document.getElementById('menu-toggle').addEventListener('click', () => {
//     if (document.getElementsByTagName('aside')[0].classList.contains('is-open')) {
//         document.getElementsByTagName('aside')[0].classList.remove('is-open');
//     } else {
//         document.getElementsByTagName('aside')[0].classList.add('is-open');
//     }
// });

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

window.addEventListener('scroll', () => {
    var windscroll = window.scrollY;
    var offsetThreshold = 100;

    resetNavIndicator();

    if (windscroll >= document.getElementsByTagName('resume-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('resume-page-nav').classList.add('is-active');
        updateCurrentPage('resume-page');
        return;
    }

    if (windscroll >= document.getElementsByTagName('portfolio-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('portfolio-page-nav').classList.add('is-active');
        updateCurrentPage('portfolio-page');
        return;
    }

    if (windscroll >= document.getElementsByTagName('skills-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('skills-page-nav').classList.add('is-active');
        updateCurrentPage('skills-page');
        return;
    }

    if (windscroll >= document.getElementsByTagName('education-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('education-page-nav').classList.add('is-active');
        updateCurrentPage('education-page');
        return;
    }

    if (windscroll >= document.getElementsByTagName('profile-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('profile-page-nav').classList.add('is-active');
        updateCurrentPage('profile-page');
        return;
    }

    if (windscroll >= document.getElementsByTagName('header-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('header-page-nav').classList.add('is-active');
        updateCurrentPage('header-page');
        return;
    }

});

window.scroll();
resetNavIndicator();
