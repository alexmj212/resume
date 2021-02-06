import * as Skills from "./skills.js";
import * as Portfolio from "./portfolio.js";

export const pages = [
    'header-page',
    'profile-page',
    'education-page',
    'skills-page',
    'portfolio-page',
    'resume-page'
];

var parser = new DOMParser();

export class headerPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/header.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('header').forEach(element => {
            this.appendChild(element);
        });
    }
}

export class profilePage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/profile.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
    }
}

export class educationPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/education.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
    }
}

export class skillsPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/skills.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        Skills.generateSkills();
    }
}

export class resumePage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/resume.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        [...document.getElementsByClassName('timeline-event')].forEach(timelineEvent => {
            timelineEvent.addEventListener('click', event => {
                changeExperienceView(event.currentTarget);
            });
        });
    }
}

export class landingPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/landing.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('article').forEach(element => {
            this.appendChild(element);
        });
    }
}
export class portfolioPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/portfolio.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        Portfolio.generatePortfolio();
    }
}

export function initializePages() {
    window.customElements.define('header-page', headerPage);
    window.customElements.define('profile-page', profilePage);
    window.customElements.define('education-page', educationPage);
    window.customElements.define('skills-page', skillsPage);
    window.customElements.define('resume-page', resumePage);
    window.customElements.define('landing-page', landingPage);
    window.customElements.define('portfolio-page', portfolioPage);
    Array.from(document.getElementsByClassName('nav-item')).forEach(item => {
        item.addEventListener('click', event => navigate(event.currentTarget))
    });
}

export let currentPage = 'header-page';

export function navigate(navItem) {
    var page = navItem.id.substring(0, navItem.id.lastIndexOf('-'));
    document.getElementsByTagName(page)[0].scrollIntoView({ behavior: "smooth" });
}

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

function changeExperienceView(element) {
    [...document.getElementsByClassName('timeline-event')].forEach(e => {
        e.classList.remove('is-active');
    })
    document.getElementById(element.id).classList.add('is-active');
    let width = document.getElementsByClassName('experience')[0].scrollWidth;
    let elementNumber = +element.id.substring(element.id.indexOf('-') + 1, element.id.length);
    document.getElementById('experience-list').scrollTo({ left: (width * elementNumber) - width });
}
