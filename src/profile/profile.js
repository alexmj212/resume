
export class profilePage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('profile.html');
        let parser = new DOMParser();
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('section').forEach(element => {
            this.appendChild(element);
        });
    }
}

window.customElements.define('profile-page', profilePage);
