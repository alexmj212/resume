'use strict';

function toggleMenu() {
    if (document.getElementsByTagName('aside')[0].classList.contains('is-open')) {
        document.getElementsByTagName('aside')[0].classList.remove('is-open');
    } else {
        document.getElementsByTagName('aside')[0].classList.add('is-open');
    }
}

function changeExperienceFocus(element) {
    [...document.getElementsByClassName('timeline-event')].forEach(e => {
        e.classList.remove('is-active');
    })
    document.getElementById(element.id).classList.add('is-active');
    let width = document.getElementsByClassName('experience')[0].scrollWidth;
    let elementNumber = +element.id.substring(element.id.indexOf('-') + 1, element.id.length);
    document.getElementById('experience-list').scrollTo({ left: (width * elementNumber) - width });
}

window.scroll();
