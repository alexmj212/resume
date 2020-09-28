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
        "skill": "Relational SQL Databases",
        "icon": "fa fa-database",
        "level": 4
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
