var parser = new DOMParser();

customElements.define('resume-footer', class extends HTMLElement {
    async connectedCallback() {
        let res = await fetch( 'components/footer.html' );
        //this.appendChild(parser.parseFromString(await res.text(), 'text/html').getElementsByTagName('footer'));
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('footer').forEach(element => {
            this.appendChild(element);
        });;
    }
});
customElements.define('resume-sidebar', class extends HTMLElement {
    async connectedCallback() {
        let res = await fetch( 'components/sidebar.html' );
        //this.appendChild(parser.parseFromString(await res.text(), 'text/html').getElementsByTagName('footer'));
        parser.parseFromString(await res.text(), 'text/html').querySelectorAll('aside').forEach(element => {
            this.appendChild(element);
        });;
    }
});

window.addEventListener("scroll", ($event) => {
    calcPositions();
});

function calcPositions() {
    const scrollPercent = (window.scrollY/window.innerHeight)*1000;

    const mediumScale = scrollPercent*0.1;
    const smallScale = scrollPercent*0.01;
    const tinyScale = scrollPercent*0.005;
    document.body.style.setProperty("--bg-size-x", mediumScale+100+"%");
    document.body.style.setProperty("--bg-size-y", mediumScale+100+"%");
    document.body.style.setProperty("--rx-offset-x", tinyScale-10+"em");
    document.body.style.setProperty("--panel-pan", smallScale*8*-1+"px");
    document.body.style.setProperty("--panel-pan2", smallScale*40+10+"px");
    document.body.style.setProperty("--panel-scale", smallScale+100+"%");
    document.body.style.setProperty("--panel-scale2", smallScale*-1+120+"%");
}

calcPositions();
