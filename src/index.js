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
