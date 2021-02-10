import "./skills.scss";

export let skills = [
    {
        "skill": "Angular (2+)",
        "icon": "fab fa-angular",
        "level": 4.5
    },
    {
        "skill": "TypeScript",
        "icon": "fab fa-microsoft",
        "level": 4
    },
    {
        "skill": "JavaScript (ES5+)",
        "icon": "fab fa-js-square",
        "level": 4
    },
    {
        "skill": "NodeJS",
        "icon": "fab fa-node-js",
        "level": 2.5
    },
    {
        "skill": "Responsive Design",
        "icon": "fa fa-mobile-alt",
        "level": 4.5
    },
    {
        "skill": "SASS / CSS3",
        "icon": "fab fa-css3",
        "level": 4.5
    },
    {
        "skill": "HTML5",
        "icon": "fab fa-html5",
        "level": 3.5
    },
    {
        "skill": "NPM / Grunt / Gulp",
        "icon": "fab fa-npm",
        "level": 3.5
    },
    {
        "skill": "Git / GitHub",
        "icon": "fab fa-github",
        "level": 4
    },
    {
        "skill": "Amazon (AWS)",
        "icon": "fab fa-aws",
        "level": 2
    }
];

export class skillsPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('skills.html');
        let parser = new DOMParser();
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        this.generateSkills();
    }

    generateSkills() {
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

                Array.apply(null, Array(5)).forEach((v, index) => {
                    let pip = document.createElement('div');
                    pip.className = 'pip';
                    if (index < skill.level) {
                        pip.classList.add('filled');
                    }
                    if (index === Math.floor(skill.level) && skill.level % 1) {
                        pip.classList.add('half');
                    }
                    skillList.appendChild(pip);
                });

                listItem.appendChild(tool);
                listItem.appendChild(skillList);
            });
        }
    }
}

window.customElements.define('skills-page', skillsPage);
