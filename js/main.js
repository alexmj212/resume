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
                    setTimeout(() => pip.classList.add('filled'), (index + 1) * 75);
                }
                skillList.appendChild(pip);
            });

            listItem.appendChild(tool);
            listItem.appendChild(skillList);
        });
    }
}

function selectPage() {
    // switch (location.hash) {
    //     case "#resume":
    //         document.getElementsByTagName('landing-page')[0].style.display = 'none';
    //         document.getElementsByTagName('resume-page')[0].style.display = 'initial';
    //         generateSkills();
    //         break;
    //     default:
    //         document.getElementsByTagName('resume-page')[0].style.display = 'none';
    //         document.getElementsByTagName('landing-page')[0].style.display = 'initial';
    //         break;
    // }
}

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

function navigate(navItem) {
    document.getElementsByTagName(navItem.id)[0].scrollIntoView({ behavior: "smooth" });
    [...document.getElementsByClassName('nav-item')].forEach(element => {
        element.classList.remove('is-active');
    });
    navItem.classList.add('is-active');
}

window.addEventListener('hashchange', () => {
    selectPage();
});
selectPage();
