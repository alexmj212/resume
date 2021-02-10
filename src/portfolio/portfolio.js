import { Modal } from "../modal/modal.js";

import "./portfolio.scss";

export let portfolioItems = [
    {
        "project": "TwinSpires Dark Mode",
        "images": [
            'img/twinspires/program/program-dark.png',
            'img/twinspires/program/program-light.png',
            'img/twinspires/program/toteboard-dark.png',
            'img/twinspires/program/toteboard-light.png'
        ],
        "date": "2020 - 2021",
        "company": "TwinSpires.com",
        "caption": "Dark Mode visual theme for TwinSpires.com",
        "bullets": [
            "Created a feature-rich theming system using modern CSS techniques",
            "Implemented controls for users to adjust their experience",
            "Integrated all components to automatically react to theme changes",
            "Optimized and consolidated page elements for performant user experience"
        ],
        "description": ``
    },
    {
        "project": "TwinSpires Responsive",
        "images": [
            'img/twinspires/responsive/program-light.png',
            'img/twinspires/responsive/program-dark.png',
            'img/twinspires/responsive/landing-light.png',
            'img/twinspires/responsive/landing-dark.png',
            'img/twinspires/responsive/calendar-light.png',
            'img/twinspires/responsive/calendar-dark.png',
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
        "description": ``
    },
    {
        "project": "TwinSpires Video",
        "images": [
            'img/twinspires/video/video-desktop-light.png',
            'img/twinspires/video/video-desktop-dark.png',
            'img/twinspires/video/video-mobile-light.png',
            'img/twinspires/video/video-mobile-dark.png'
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
        "description": ``
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
