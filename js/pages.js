'use strict';

const pages = [
    'header-page',
    'profile-page',
    'education-page',
    'skills-page',
    'portfolio-page',
    'resume-page'
];

var parser = new DOMParser();

class headerPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/header.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('header').forEach(element => {
            this.appendChild(element);
        });
    }
}

class profilePage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/profile.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
    }
}

class educationPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/education.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
    }
}

class skillsPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/skills.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        generateSkills();
    }
}

class resumePage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/resume.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
    }
}

class landingPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/landing.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('article').forEach(element => {
            this.appendChild(element);
        });
    }
}
class portfolioPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('components/portfolio.html');
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        generatePortfolio();
    }
}

window.customElements.define('header-page', headerPage);
window.customElements.define('profile-page', profilePage);
window.customElements.define('education-page', educationPage);
window.customElements.define('skills-page', skillsPage);
window.customElements.define('resume-page', resumePage);
window.customElements.define('landing-page', landingPage);
window.customElements.define('portfolio-page', portfolioPage);

var currentPage = 'header-page';

function navigate(navItem) {
    var page = navItem.id.substring(0, navItem.id.lastIndexOf('-'));
    document.getElementsByTagName(page)[0].scrollIntoView({ behavior: "smooth" });
    updatePaginator();
}

function nextPage() {
    let nextPage = pages.indexOf(currentPage) + 1;
    if (nextPage < pages.length) {
        navigate(document.getElementById(pages[nextPage] + '-nav'));
    }
}

function previousPage() {
    let previousPage = pages.indexOf(currentPage) - 1;
    if (previousPage >= 0) {
        navigate(document.getElementById(pages[previousPage] + '-nav'));
    }
}

function updateCurrentPage(page) {
    currentPage = page;
}

function updatePaginator() {
    if (pages.indexOf(currentPage) === 0) {
        document.getElementById('next-page').classList.remove('disabled');
        document.getElementById('previous-page').classList.add('disabled');
    } else {
        document.getElementById('next-page').classList.add('disabled');
        document.getElementById('previous-page').classList.add('disabled');
    }
}

function resetNavIndicator() {
    [...document.getElementsByClassName('nav-item')].forEach(element => {
        element.classList.remove('is-active');
    });
}

window.addEventListener('scroll', () => {
    var windscroll = window.scrollY;
    var offsetThreshold = 100;

    resetNavIndicator();
    updatePaginator();

    if (windscroll >= document.getElementsByTagName('resume-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('resume-page-nav').classList.add('is-active');
        updateCurrentPage('resume-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('portfolio-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('portfolio-page-nav').classList.add('is-active');
        updateCurrentPage('portfolio-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('skills-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('skills-page-nav').classList.add('is-active');
        updateCurrentPage('skills-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('education-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('education-page-nav').classList.add('is-active');
        updateCurrentPage('education-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('profile-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('profile-page-nav').classList.add('is-active');
        updateCurrentPage('profile-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('header-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('header-page-nav').classList.add('is-active');
        updateCurrentPage('header-page');
        updatePaginator();
        return;
    }

});

resetNavIndicator();
