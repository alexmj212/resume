import "./header.scss";

export class headerPage extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('header.html');
        let parser = new DOMParser();
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('header').forEach(element => {
            this.appendChild(element);
        });
    }
}

window.customElements.define('header-page', headerPage);
