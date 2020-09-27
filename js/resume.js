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
        "skill": "Responsive / Mobile Design",
        "icon": "fa fa-mobile-alt",
        "level": 9
    },
    {
        "skill": "HTML5",
        "icon": "fab fa-html5",
        "level": 7
    },
    {
        "skill": "LESS / SASS / CSS3",
        "icon": "fab fa-css3",
        "level": 9
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
        "skill": "REST-ful web services",
        "icon": "fa fa-code",
        "level": 7
    }
];

function generateSkills() {
    skills.forEach(skill => {
        let listItem = document.querySelector('div.tools ul').appendChild(document.createElement('li'));

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
                pip.classList.add('filled');
            }
            skillList.appendChild(pip);
        });

        listItem.appendChild(tool);
        listItem.appendChild(skillList);
    });

}

generateSkills();
