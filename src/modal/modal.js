import "./modal.scss";

export class Modal extends HTMLElement {

    constructor() {
        super();
        this.modalOpen = false;
        this.scrollTop = 0;
        this.slidePositionIndex = 0;
        this.slideCount = 0;
    }



    async connectedCallback() {
        let res = await fetch('modal.html');
        var parser = new DOMParser();
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('aside').forEach(element => {
            this.appendChild(element);
        });
        document.addEventListener('click', event => {
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

    openModal() {
        this.slideCount = document.getElementsByClassName('slides')[0].children.length;
        updateSlideArrows();
        document.getElementById('modal').classList.remove('hidden');
        this.scrollTop = document.documentElement.scrollTop;
        document.body.style.top = - (scrollTop) + 'px';
        document.body.classList.add('scroll-lock');
        document.getElementsByTagName('main')[0].classList.add('modal-open');
        setTimeout(() => this.modalOpen = true, 500);
    }

    closeModal() {
        document.getElementById('modal').classList.add('hidden');
        document.body.classList.remove('scroll-lock');
        document.getElementsByTagName('main')[0].classList.remove('modal-open');
        document.documentElement.scrollTop = this.scrollTop;
        this.modalOpen = false

        setTimeout(() => {
            document.getElementById('slides').scrollLeft = 0;
            this.slidePositionIndex = 0;
        }, 250);
    }

    slideShowNext() {
        let width = Math.ceil(document.getElementById('slides').scrollWidth / this.slideCount);
        if (this.slidePositionIndex >= 0 && this.slidePositionIndex < this.slideCount - 1) {
            this.slidePositionIndex++;
            document.getElementsByClassName('slides')[0].scrollTo({ left: (width * this.slidePositionIndex) });
            this.updateSlideArrows();
        }
    }

    slideShowPrevious() {
        let width = Math.ceil(document.getElementById('slides').scrollWidth / this.slideCount);
        if (this.slidePositionIndex >= 1 && this.slidePositionIndex < this.slideCount) {
            this.slidePositionIndex--;
            document.getElementsByClassName('slides')[0].scrollTo({ left: (width * this.slidePositionIndex) });
            this.updateSlideArrows();
        }
    }

    updateSlideArrows() {
        if (this.slidePositionIndex === 0) {
            document.getElementById('previous-slide').classList.add('disabled');
            document.getElementById('next-slide').classList.remove('disabled');
        } else if (slidePositionIndex === this.slideCount - 1) {
            document.getElementById('previous-slide').classList.remove('disabled');
            document.getElementById('next-slide').classList.add('disabled');
        } else {
            document.getElementById('previous-slide').classList.remove('disabled');
            document.getElementById('next-slide').classList.remove('disabled');
        }
    }
}

window.customElements.define('modal-element', Modal);

