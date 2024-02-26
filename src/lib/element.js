class Dummy extends HTMLElement {
    constructor() {
        super();
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
        }
        const stylesheet = new CSSStyleSheet();
        stylesheet.insertRule(':host{color: green;}');
        // @ts-ignore
        this.shadowRoot.adoptedStyleSheets = [stylesheet];
    }
}

customElements.define('ex-dummy', Dummy);
