import { Modal } from "../modal/modal.js";

import "./portfolio.scss";

export let portfolioItems = [
    // {
    //     "project": "TwinSpires Dark Mode",
    //     "images": [
    //         'img/twinspires/program/program-dark.png',
    //         'img/twinspires/program/program-light.png',
    //         'img/twinspires/program/toteboard-dark.png',
    //         'img/twinspires/program/toteboard-light.png'
    //     ],
    //     "date": "2020 - 2021",
    //     "company": "TwinSpires.com",
    //     "caption": "Dark Mode visual theme for TwinSpires.com",
    //     "bullets": [
    //         "Created a feature-rich theming system using modern CSS techniques to toggle between themes",
    //         "Implemented controls for users to adjust their experience",
    //         "Integrated theming system with all components to automatically react to theme changes",
    //         "Optimization and consolidation of page elements for consistent and performant user experience"
    //     ],
    //     "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ultrices interdum. Donec in
    //         neque laoreet ipsum rhoncus tristique eu consequat mauris. Donec tristique odio eget nibh posuere,
    //         sed malesuada sem porta. Praesent neque massa, interdum et dolor ac, ornare rutrum orci. Duis
    //         sollicitudin turpis nec vestibulum dictum. Sed auctor nisi eu erat euismod, non mattis erat rutrum.
    //         Sed hendrerit odio nisi, eget molestie justo tristique vel. In dignissim dui ac mollis iaculis. Ut
    //         sodales volutpat mi eget faucibus.`
    // },
    {
        "project": "TwinSpires Responsive",
        "images": [
            'img/twinspires/responsive/program-light.png',
            //'img/twinspires/responsive/program-dark.png',
            'img/twinspires/responsive/landing-light.png',
            //'img/twinspires/responsive/landing-dark.png',
            'img/twinspires/responsive/calendar-light.png',
            //'img/twinspires/responsive/calendar-dark.png',
        ],
        "date": "2018",
        "company": "TwinSpires.com",
        "caption": "Responsive implementation of TwinSpires.com",
        "bullets": [
            "Added support for dynamically sized content viewports",
            "Supporting all mobile platforms including iOS, iPadOS, and Android",
            "Created mobile-specific elements including navigation, modals, and lists",
            "Full parity in mobile vs. desktop functionality"
        ],
        "description": `This project was a great opportunity to exercise most of my strengths with front end development. I really enjoyed working with the feature focused-team and coming together to complete a major project. Mobile-focused projects more prevalent not just at TwinSpires but in the industry as a whole.`
    },
    {
        "project": "TwinSpires Video",
        "images": [
            'img/twinspires/video/video-desktop-light.png',
            //'img/twinspires/video/video-desktop-dark.png',
            'img/twinspires/video/video-mobile-light.png',
            //'img/twinspires/video/video-mobile-dark.png'
        ],
        "date": "2018 - 2020",
        "company": "TwinSpires.com",
        "caption": "Live and Replayable Video of Racing",
        "bullets": [
            "Integrated front-end libraries from multiple video providers to create a seamless experience",
            "Created site-wide video components that support a wide variety of views and formats",
            "Dynamic controls for viewing and interacting with video content",
            "Support for desktop and mobile video experiences"
        ],
        "description": `This vital feature required a intensve focus to properly to deliver for customers. I mastered the complexity around video display in desktop and mobile focused applications. Successful delivery of this project is a great personal achievement for myself and for TwinSpires.com`
    }
];

export class portfolioPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('portfolio.html');
        let parser = new DOMParser();
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
        this.generatePortfolio();
    }

    generatePortfolio() {
        let list = document.querySelector('#portfolio');
        if (list) {
            list.innerHTML = "";
            portfolioItems.forEach((portfolioItem, index) => {
                let listItem = document.createElement('div')
                listItem.className = 'portfolio-item';
                let listItemContainer = document.createElement('div')
                listItemContainer.className = 'portfolio-item-container';

                let listItemImage = document.createElement('div');
                listItemImage.className = 'portfolio-item-image';
                let listItemImageElement = document.createElement('img')
                listItemImageElement.setAttribute('src', portfolioItem.images[0]);
                listItemImage.appendChild(listItemImageElement);

                let listItemDescription = document.createElement('div');
                listItemDescription.className = 'portfolio-item-description';
                listItemDescription.innerHTML = portfolioItem.project + ' | ' + portfolioItem.date;

                // let listItemDescriptionCaption = document.createElement('p');
                // listItemDescriptionCaption.innerHTML = portfolioItem.caption;
                // listItemDescription.appendChild(listItemDescriptionCaption);

                let listItemDescriptionSummary = document.createElement('ul');
                if (portfolioItem.bullets) {
                    portfolioItem.bullets.forEach(bullet => {
                        let listItemDescriptionBullet = document.createElement('li');
                        listItemDescriptionBullet.innerHTML = bullet;
                        listItemDescriptionSummary.appendChild(listItemDescriptionBullet);
                    });
                }
                listItemDescription.appendChild(listItemDescriptionSummary);


                listItemContainer.appendChild(listItemImage)
                listItemContainer.appendChild(listItemDescription);
                listItem.appendChild(listItemContainer);
                listItemContainer.addEventListener("click", () => { this.openPortfolioModal(index); });
                list.appendChild(listItem);

            });

        }
    }

    openPortfolioModal(index) {
        let portfolioItem = portfolioItems[index];
        let modal = new Modal();
        modal.openModal(portfolioItem)
    }


}

window.customElements.define('portfolio-page', portfolioPage);
