export class l2_personal_finances_main extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.setAttribute("render-template", "false");
        this.setAttribute("show-template", "false");
    }

    static get observedAttributes() {
        return ['render-template', 'show-template'];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = this.template();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'render-template' && oldValue === 'false' && newValue === 'true'){
            this.render_template();
        }
        if(name === 'show-template' && oldValue === 'false' && newValue === 'true'){
            this.show_template();
        }
        if(name === 'show-template' && oldValue === 'true' && newValue === 'false'){
            this.hide_template();
        }
    }

    render_template(){
        let content = document.importNode(this.shadowRoot.querySelector("#l2-personal-view-template").content, true);
        this.shadowRoot.appendChild(content);
        this.shadowRoot.querySelector("style").innerHTML = this.l2_personal_view_style_show();
    }

    hide_template(){
        this.shadowRoot.querySelector("style").innerHTML = this.l2_personal_view_style_hide();
    }

    show_template(){
        this.shadowRoot.querySelector("style").innerHTML = this.l2_personal_view_style_show();
    }

    l2_personal_view_style_hide(){
        return `
        :host {
            display: none;
            background: white;
        }
        `;
    }

    l2_personal_view_style_show(){
        return `
        :host {
            display: flex;
            flex-direction: row;
            justify-content: center;
            height: 100%;
            background: white;
        }`
        ;
    }

    template() {
        return `<template id="l2-personal-view-template">
        <style>${this.l2_personal_view_style_show()}</style>
        <h6>personal finances<h6>
        </template>
        `;
    }

}

customElements.define("l2-personal-finances-main", l2_personal_finances_main)