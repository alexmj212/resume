'use strict';

var parser = new DOMParser();

customElements.define('resume-footer', class extends HTMLElement {
    async connectedCallback() {
        let res = await fetch('components/footer.html');
        //this.appendChild(parser.parseFromString(await res.text(), 'text/html').getElementsByTagName('footer'));
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('footer').forEach(element => {
            this.appendChild(element);
        });
    }
});
customElements.define('resume-sidebar', class extends HTMLElement {
    async connectedCallback() {
        let res = await fetch('components/sidebar.html');
        //this.appendChild(parser.parseFromString(await res.text(), 'text/html').getElementsByTagName('footer'));
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('aside').forEach(element => {
            this.appendChild(element);
        });
        generateSkills();
    }
});

const skills = [
    {
        "skill": "Angular (v2+)",
        "level": 9
    },
    {
        "skill": "TypeScript",
        "level": 8
    },
    {
        "skill": "JavaScript (ES5+)",
        "level": 8
    },
    {
        "skill": "NodeJS",
        "level": 6
    },
    {
        "skill": "Responsive / Mobile Design",
        "level": 9
    },
    {
        "skill": "HTML5",
        "level": 7
    },
    {
        "skill": "LESS / SASS / CSS3",
        "level": 9
    },
    {
        "skill": "Grunt / Gulp / NPM",
        "level": 7
    },
    {
        "skill": "Git / GitHub",
        "level": 8
    },
    {
        "skill": "REST-ful web services",
        "level": 7
    }
];

function generateSkills() {
    skills.forEach(skill => {
        let listItem = document.querySelector('div.tools ul').appendChild(document.createElement('li'));

        let tool = document.createElement('div');
        tool.classList.add('tool');
        tool.textContent = skill.skill;

        let skillList = document.createElement('div');
        skillList.classList.add('skill-level');

        Array.apply(null, Array(10)).forEach((v, index) => {
            let pip = document.createElement('div');
            pip.classList.add('pip');
            if (index < skill.level) {
                pip.classList.add('filled');
            }
            skillList.appendChild(pip);
        });

        listItem.appendChild(tool);
        listItem.appendChild(skillList);
    });

}


calcPositions();
