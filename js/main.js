'use strict';

const skills = [
    {
        "skill": "Angular (v2+)",
        "icon": "fab fa-angular",
        "level": 9
    },
    {
        "skill": "TypeScript",
        "icon": "fab fa-microsoft",
        "level": 8
    },
    {
        "skill": "JavaScript (ES5+)",
        "icon": "fab fa-js-square",
        "level": 8
    },
    {
        "skill": "NodeJS",
        "icon": "fab fa-node-js",
        "level": 6
    },
    {
        "skill": "Responsive Design",
        "icon": "fa fa-mobile-alt",
        "level": 9
    },
    {
        "skill": "LESS / SASS / CSS3",
        "icon": "fab fa-css3",
        "level": 9
    },
    {
        "skill": "HTML5",
        "icon": "fab fa-html5",
        "level": 7
    },
    {
        "skill": "Grunt / Gulp / NPM",
        "icon": "fab fa-npm",
        "level": 7
    },
    {
        "skill": "Git / GitHub",
        "icon": "fab fa-github",
        "level": 8
    },
    {
        "skill": "PHP",
        "icon": "fab fa-php",
        "level": 6
    },
    {
        "skill": "Java",
        "icon": "fab fa-java",
        "level": 4
    },
    {
        "skill": "Amazon (AWS)",
        "icon": "fab fa-aws",
        "level": 5
    },
    {
        "skill": "NoSQL Databases",
        "icon": "far fa-file-code",
        "level": 4
    },
    {
        "skill": "SQL Databases",
        "icon": "fa fa-database",
        "level": 4
    }
];

var parser = new DOMParser();

function generateSkills() {
    let list = document.querySelector('div.tools ul');
    if (list) {
        list.innerHTML = "";
        skills.forEach(skill => {
            let listItem = list.appendChild(document.createElement('li'));

            let tool = document.createElement('div');
            tool.className = 'tool';
            let icon = document.createElement('i');
            icon.className = skill.icon;
            tool.appendChild(icon);
            tool.appendChild(document.createTextNode(skill.skill));

            let skillList = document.createElement('div');
            skillList.className = 'skill-level';

            Array.apply(null, Array(10)).forEach((v, index) => {
                let pip = document.createElement('div');
                pip.className = 'pip';
                if (index < skill.level) {
                    setTimeout(() => pip.classList.add('filled'), (index + 1) * 10);
                }
                skillList.appendChild(pip);
            });

            listItem.appendChild(tool);
            listItem.appendChild(skillList);
        });
    }
}

const pages = [
    'header-page',
    'profile-page',
    'education-page',
    'skills-page',
    'resume-page'
];

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

window.customElements.define('header-page', headerPage);
window.customElements.define('profile-page', profilePage);
window.customElements.define('education-page', educationPage);
window.customElements.define('skills-page', skillsPage);
window.customElements.define('resume-page', resumePage);
window.customElements.define('landing-page', landingPage);

var currentPage = 'header-page';

function navigate(navItem) {
    var page = navItem.id.substring(0, navItem.id.lastIndexOf('-'));
    document.getElementsByTagName(page)[0].scrollIntoView({ behavior: "smooth" });
    updatePaginator();
}

function nextPage() {
    let nextPage = pages.indexOf(currentPage) + 1;
    if (nextPage < pages.length) {
        navigate(document.getElementById(pages[nextPage]+'-nav'));
    }
}

function previousPage() {
    let previousPage = pages.indexOf(currentPage) - 1;
    if (previousPage >= 0) {
        navigate(document.getElementById(pages[previousPage]+'-nav'));
    }
}

function updateCurrentPage(page) {
    currentPage = page;
}

function updateHashLocation(page) {
    location.hash = page;
}

function updatePaginator() {
    if (pages.indexOf(currentPage) === 0) {
        document.getElementById('next-page').classList.remove('disabled');
        document.getElementById('previous-page').classList.add('disabled');
    } else if (pages.indexOf(currentPage) === pages.length - 1) {
        document.getElementById('next-page').classList.add('disabled');
        document.getElementById('previous-page').classList.remove('disabled');
    } else {
        document.getElementById('next-page').classList.remove('disabled');
        document.getElementById('previous-page').classList.remove('disabled');
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
        updateHashLocation('resume-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('skills-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('skills-page-nav').classList.add('is-active');
        updateCurrentPage('skills-page');
        updateHashLocation('skills-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('education-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('education-page-nav').classList.add('is-active');
        updateCurrentPage('education-page');
        updateHashLocation('education-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('profile-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('profile-page-nav').classList.add('is-active');
        updateCurrentPage('profile-page');
        updateHashLocation('profile-page');
        updatePaginator();
        return;
    }

    if (windscroll >= document.getElementsByTagName('header-page')[0].offsetTop - offsetThreshold) {
        document.getElementById('header-page-nav').classList.add('is-active');
        updateCurrentPage('header-page');
        updateHashLocation('header-page');
        updatePaginator();
        return;
    }

});

function toggleMenu() {
    if (document.getElementsByTagName('aside')[0].classList.contains('is-open')) {
        document.getElementsByTagName('aside')[0].classList.remove('is-open');
    } else {
        document.getElementsByTagName('aside')[0].classList.add('is-open');
    }
}


if (location.hash) {
    var page = location.hash.substring(1, location.hash.length)+'-nav';
    navigate(document.getElementById(page));
} else {
    window.scroll();
    resetNavIndicator();
}
