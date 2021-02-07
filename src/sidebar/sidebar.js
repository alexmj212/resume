import "./sidebar.scss";

export class Sidebar extends HTMLElement {

    constructor() { super() }

    async connectedCallback() {
        let res = await fetch('sidebar.html');
        var parser = new DOMParser();
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('aside').forEach(element => {
            this.appendChild(element);
        });
        Array.from(document.getElementsByClassName('nav-item')).forEach(item => {
            item.addEventListener('click', event => this.navigate(event.currentTarget))
        });
    }

    navigate(navItem) {
        var page = navItem.id.substring(0, navItem.id.lastIndexOf('-'));
        document.getElementsByTagName(page)[0].scrollIntoView({ behavior: "smooth" });
    }
}

window.customElements.define('sidebar-element', Sidebar);
