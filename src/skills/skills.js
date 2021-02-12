import "./skills.scss";

export let skills = [
    {
        "skill": "Angular (2+)",
        "icon": "fab fa-angular",
        "level": 4.5,
        "description": `
            Modules, components, services, routing, NG tooling, Material.
        `
    },
    {
        "skill": "TypeScript",
        "icon": "fab fa-microsoft",
        "level": 4,
        "description": `
            Typing, classes, inheritance, interfaces, generics, compiler configuration
        `
    },
    {
        "skill": "JavaScript (ES5+)",
        "icon": "fab fa-js-square",
        "level": 4,
        "description": `
            Classes, objects, event-based programming, modern ECMA feature like modules, web components
        `
    },
    {
        "skill": "NodeJS",
        "icon": "fab fa-node-js",
        "level": 2.5,
        "description": `
            Server-level Javascript development, environment configuration
        `
    },
    {
        "skill": "Responsive Design",
        "icon": "fa fa-mobile-alt",
        "level": 4.5,
        "description": `
            Browser and operating system testing, media queries, responsive layouts, mobile-focused design
        `
    },
    {
        "skill": "SASS / CSS3",
        "icon": "fab fa-css3",
        "level": 4.5,
        "description": `
            Styling frameworks, reusability, precedence, pseudo-selectors, media queries, inheritence
        `
    },
    {
        "skill": "HTML5",
        "icon": "fab fa-html5",
        "level": 3.5,
        "description": `
            Semantic document elements, multimedia content and controls
        `
    },
    {
        "skill": "NPM, Grunt, Gulp, Webpack",
        "icon": "fab fa-npm",
        "level": 3.5,
        "description": `
            Implementing toolchains for building and testing complex front-end frameworks, minification, uglification, linting
        `
    },
    {
        "skill": "Git / GitHub",
        "icon": "fab fa-github",
        "level": 4,
        "description": `
            Branching strategy, merge conflict resolution, tagging, pull requests
        `
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
                let skillName = document.createElement('h3');
                skillName.innerHTML = skill.skill;
                tool.appendChild(skillName);

                // let skillList = document.createElement('div');
                // skillList.className = 'skill-level';

                // Array.apply(null, Array(5)).forEach((v, index) => {
                //     let pip = document.createElement('div');
                //     pip.className = 'pip';
                //     if (index < skill.level) {
                //         pip.classList.add('filled');
                //     }
                //     if (index === Math.floor(skill.level) && skill.level % 1) {
                //         pip.classList.add('half');
                //     }
                //     skillList.appendChild(pip);
                // });

                if (skill.description) {
                    let description = document.createElement('p');
                    description.innerHTML = skill.description;
                    tool.appendChild(description);
                }

                listItem.appendChild(tool);
                // listItem.appendChild(skillList);
            });
        }
    }
}

window.customElements.define('skills-page', skillsPage);
