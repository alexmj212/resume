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

window.addEventListener("scroll", ($event) => {
    const percent = ((window.scrollY*0.02));
    const percent2 = ((window.scrollY*0.005));
    document.body.style.setProperty("--bg-size-x", percent+100+"%");
    document.body.style.setProperty("--bg-size-y", percent+100+"%");
    document.body.style.setProperty("--rx-offset-x", percent2+(-10)+"em");
});
