'use strict';

const portfolioItems = [
    {
        "project": "TwinSpires Dark Mode",
        "images": [
            'dist/img/twinspires/program/program-dark.png',
            'dist/img/twinspires/program/program-light.png',
            'dist/img/twinspires/program/toteboard-dark.png',
            'dist/img/twinspires/program/toteboard-light.png'
        ],
        "date": "2020 - 2021",
        "company": "TwinSpires.com",
        "caption": "Implementation of dark mode visual theme for TwinSpires.com",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ultrices interdum. Donec in
            neque laoreet ipsum rhoncus tristique eu consequat mauris. Donec tristique odio eget nibh posuere,
            sed malesuada sem porta. Praesent neque massa, interdum et dolor ac, ornare rutrum orci. Duis
            sollicitudin turpis nec vestibulum dictum. Sed auctor nisi eu erat euismod, non mattis erat rutrum.
            Sed hendrerit odio nisi, eget molestie justo tristique vel. In dignissim dui ac mollis iaculis. Ut
            sodales volutpat mi eget faucibus.`
    },
    {
        "project": "TwinSpires Responsive",
        "images": [
            'dist/img/twinspires/responsive/program-light.png',
            'dist/img/twinspires/responsive/program-dark.png',
            'dist/img/twinspires/responsive/landing-light.png',
            'dist/img/twinspires/responsive/landing-dark.png',
            'dist/img/twinspires/responsive/calendar-light.png',
            'dist/img/twinspires/responsive/calendar-dark.png',
        ],
        "date": "2018",
        "company": "TwinSpires.com",
        "caption": "Responsive implementation of TwinSpires.com",
        "description": `This project was a great opportunity to exercise most of my strengths with front end development. I really enjoyed working with the feature focused-team and coming together to complete a major project. Mobile-focused projects more prevalent not just at TwinSpires but in the industry as a whole.`
    },
    {
        "project": "TwinSpires Video",
        "images": [
            'dist/img/twinspires/video/video-mobile-light.png',
            'dist/img/twinspires/video/video-mobile-dark.png',
            'dist/img/twinspires/video/video-desktop-light.png',
            'dist/img/twinspires/video/video-desktop-dark.png'
        ],
        "date": "2018 - 2020",
        "company": "TwinSpires.com",
        "caption": "Responsive implementation of TwinSpires.com",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ultrices interdum. Donec in
            neque laoreet ipsum rhoncus tristique eu consequat mauris. Donec tristique odio eget nibh posuere,
            sed malesuada sem porta. Praesent neque massa, interdum et dolor ac, ornare rutrum orci. Duis
            sollicitudin turpis nec vestibulum dictum. Sed auctor nisi eu erat euismod, non mattis erat rutrum.
            Sed hendrerit odio nisi, eget molestie justo tristique vel. In dignissim dui ac mollis iaculis. Ut
            sodales volutpat mi eget faucibus.`
    }
];

function generatePortfolio() {
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

            listItemContainer.appendChild(listItemImage)
            listItemContainer.appendChild(listItemDescription);
            listItem.appendChild(listItemContainer);
            listItemContainer.addEventListener("click", () => { openPortfolioModal(index); });
            list.appendChild(listItem);

        });

    }
}

function openPortfolioModal(index) {
    let portfolioItem = portfolioItems[index];
    generateModalSlideshow(portfolioItem.images);
    document.querySelector('div.modal-header h1').innerHTML = portfolioItem.project;
    document.querySelector('div.modal-content p').innerHTML = portfolioItem.description;
    document.querySelector('div.modal-footer').innerHTML = portfolioItem.date;
    openModal();
}

function generateModalSlideshow(imageList = []) {
    let slides = document.querySelector('#slides');
    slides.innerHTML = "";

    imageList.forEach(image => {
        let slide = document.createElement('div');
        slide.className = 'slide image';
        let img = document.createElement('img');
        img.setAttribute('src', image);
        slide.appendChild(img);
        slides.appendChild(slide);
    });
}
