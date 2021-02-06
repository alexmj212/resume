export let modalOpen = false;
export let scrollTop = 0;
export let slidePositionIndex = 0;
export let slideCount = document.getElementsByClassName('slides')[0].children.length;

export function openModal() {
    slideCount = document.getElementsByClassName('slides')[0].children.length;
    updateSlideArrows();
    document.getElementById('modal').classList.remove('hidden');
    scrollTop = document.documentElement.scrollTop;
    document.body.style.top = - (scrollTop) + 'px';
    document.body.classList.add('scroll-lock');
    document.getElementsByTagName('main')[0].classList.add('modal-open');
    setTimeout(() => modalOpen = true, 500);
}

export function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.classList.remove('scroll-lock');
    document.getElementsByTagName('main')[0].classList.remove('modal-open');
    document.documentElement.scrollTop = scrollTop;
    modalOpen = false

    setTimeout(() => {
        document.getElementById('slides').scrollLeft = 0;
        slidePositionIndex = 0;
    }, 250);
}

export function slideShowNext() {
    let width = Math.ceil(document.getElementById('slides').scrollWidth / slideCount);
    if (slidePositionIndex >= 0 && slidePositionIndex < slideCount - 1) {
        slidePositionIndex++;
        document.getElementsByClassName('slides')[0].scrollTo({ left: (width * slidePositionIndex) });
        updateSlideArrows();
    }
}

export function slideShowPrevious() {
    let width = Math.ceil(document.getElementById('slides').scrollWidth / slideCount);
    if (slidePositionIndex >= 1 && slidePositionIndex < slideCount) {
        slidePositionIndex--;
        document.getElementsByClassName('slides')[0].scrollTo({ left: (width * slidePositionIndex) });
        updateSlideArrows();
    }
}

export function updateSlideArrows() {
    if (slidePositionIndex === 0) {
        document.getElementById('previous-slide').classList.add('disabled');
        document.getElementById('next-slide').classList.remove('disabled');
    } else if (slidePositionIndex === slideCount - 1) {
        document.getElementById('previous-slide').classList.remove('disabled');
        document.getElementById('next-slide').classList.add('disabled');
    } else {
        document.getElementById('previous-slide').classList.remove('disabled');
        document.getElementById('next-slide').classList.remove('disabled');
    }
}

document.addEventListener('click', event => {
    var isClickInside = document.getElementById('modal-container').contains(event.target);

    if (!isClickInside && modalOpen) {
        closeModal();
    }
});

document.getElementById('previous-slide').addEventListener('click', event => {
    slideShowPrevious(this);
});

document.getElementById('next-slide').addEventListener('click', event => {
    slideShowNext(this);
});

document.getElementById('close-modal').addEventListener('click', event => {
    closeModal();
});
