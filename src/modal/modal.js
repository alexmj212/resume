import { portfolioItems } from "../portfolio/portfolio";
import "./modal.scss";

export class Modal extends HTMLElement {

    constructor() {
        super();
        this.modalOpen = false;
        this.slidePositionIndex = 0;
        this.slideCount = 0;
    }

    addEventListeners() {
        document.getElementById('modal').addEventListener('click', event => {
            var isClickInside = document.getElementById('modal-container').contains(event.target);

            if (!isClickInside && this.modalOpen) {
                this.closeModal();
            }
        });

        document.getElementById('previous-slide').addEventListener('click', event => {
            this.slideShowPrevious(this);
        });

        document.getElementById('next-slide').addEventListener('click', event => {
            this.slideShowNext(this);
        });

        document.getElementById('close-modal').addEventListener('click', event => {
            this.closeModal();
        });
    }

    removeEventListeners() {
        //document.removeEventListener('click');
        document.getElementById('previous-slide').removeEventListener('click', ()=>{});
        document.getElementById('next-slide').removeEventListener('click', ()=>{});
        document.getElementById('close-modal').removeEventListener('click', ()=>{});
    }

    openModal(portfolioItem) {
        return new Promise(resolve => {
            fetch('modal.html').then(response => response.text()).then(body => {
                let parser = new DOMParser();
                parser.parseFromString(body, 'text/html').querySelectorAll('#modal').forEach(element => {
                    //this.addEventListeners();
                    document.getElementsByTagName('modal-element')[0].appendChild(element);
                    document.querySelector('div.modal-header h1').innerHTML = portfolioItem.project;

                    let listItemDescriptionSummary = document.createElement('ul');
                    listItemDescriptionSummary.classList.add('description');
                    if (portfolioItem.bullets) {
                        portfolioItem.bullets.forEach(bullet => {
                            let listItemDescriptionBullet = document.createElement('li');
                            listItemDescriptionBullet.innerHTML = bullet;
                            listItemDescriptionSummary.appendChild(listItemDescriptionBullet);
                        });
                    }
                    let listItemDescription = document.createElement('div');
                    listItemDescription.innerHTML = portfolioItem.description;
                    document.querySelector('div.modal-content').appendChild(listItemDescriptionSummary);
                    document.querySelector('div.modal-content').appendChild(listItemDescription);
                    document.querySelector('div.modal-footer').innerHTML = portfolioItem.date;
                    this.generateModalSlideshow(portfolioItem.images);
                    this.slideCount = document.getElementsByClassName('slides')[0].children.length;
                    this.updateSlideArrows();



                    setTimeout(() => {
                        document.getElementById('modal').classList.remove('hidden');
                        document.body.style.top = - (document.documentElement.scrollTop) + 'px';
                        document.body.classList.add('scroll-lock');
                        document.getElementsByTagName('main')[0].classList.add('modal-open');
                        this.addEventListeners();
                        this.modalOpen = true;
                        resolve();
                    }, 250);
                });
            });
        });
    }

    closeModal() {
        document.getElementById('modal').classList.add('hidden');
        document.body.classList.remove('scroll-lock');
        document.getElementsByTagName('main')[0].classList.remove('modal-open');
        document.documentElement.scrollTop = document.body.style.top.match(/\d+/).join("");
        document.body.style.top = "";
        this.modalOpen = false;
        this.removeEventListeners();
        setTimeout(() => { document.getElementById('modal').remove() }, 500);
        this.slidePositionIndex = 0;
    }

    generateModalSlideshow(imageList = []) {
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

    slideShowNext() {
        this.slideCount = document.getElementsByClassName('slides')[0].children.length;
        let width = Math.ceil(document.getElementById('slides').scrollWidth / this.slideCount);
        if (this.slidePositionIndex >= 0 && this.slidePositionIndex < this.slideCount - 1) {
            this.slidePositionIndex++;
            document.getElementsByClassName('slides')[0].scrollTo({ left: (width * this.slidePositionIndex) });
            this.updateSlideArrows();
        }
    }

    slideShowPrevious() {
        this.slideCount = document.getElementsByClassName('slides')[0].children.length;
        let width = Math.ceil(document.getElementById('slides').scrollWidth / this.slideCount);
        if (this.slidePositionIndex >= 1 && this.slidePositionIndex < this.slideCount) {
            this.slidePositionIndex--;
            document.getElementsByClassName('slides')[0].scrollTo({ left: (width * this.slidePositionIndex) });
            this.updateSlideArrows();
        }
    }

    updateSlideArrows() {
        this.slideCount = document.getElementsByClassName('slides')[0].children.length;
        if (this.slidePositionIndex === 0) {
            document.getElementById('previous-slide').classList.add('disabled');
            document.getElementById('next-slide').classList.remove('disabled');
        } else if (this.slidePositionIndex === this.slideCount - 1) {
            document.getElementById('previous-slide').classList.remove('disabled');
            document.getElementById('next-slide').classList.add('disabled');
        } else {
            document.getElementById('previous-slide').classList.remove('disabled');
            document.getElementById('next-slide').classList.remove('disabled');
        }
    }
}

window.customElements.define('modal-element', Modal);

