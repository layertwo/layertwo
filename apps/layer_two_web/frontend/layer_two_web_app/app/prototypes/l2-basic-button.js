export class l2_basic_button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.button_background_color = "background: white;";
        this.button_name = this.getAttribute('name');
        this.button_nav_section = this.getAttribute('nav-section');
        this.setAttribute("id", `${this.button_nav_section}-${this.button_name}`);
        this.setAttribute("selected", "false");
        this.addEventListener("click", event => this.emit_button_clicked_event());
        this.addEventListener('touchstart', event => this.emit_button_clicked_event());
    }

    static get observedAttributes() {
        return ['selected'];
    }
    
    emit_button_clicked_event() {
        this.dispatchEvent(new CustomEvent(this.button_nav_section + " " + this.button_name, { bubble: true, composed: true }));
    }

    connectedCallback() {
        this.render_initial_button();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'selected' && oldValue === 'false' && newValue === 'true'){
            this.button_background_color = "background: DeepSkyBlue;";
            this.update_button_style();
        }
        if(name === 'selected' && oldValue === 'true' && newValue === 'false'){
            this.button_background_color = "background: white;";
            this.update_button_style();
        }
    }

    update_button_style(){
        this.shadowRoot.querySelector("style").innerHTML = this.button_style();
    }

    basic_button_container_style(){
        return `#basic_button_container {
            user-select: none;
            display: grid;
            justify-items:center;
            box-shadow: 0 0 5px -1px grey;
            ${this.button_background_color}
            transition: background 0.3s;
        }`
    }

    basic_button_name_style(){
        return `#basic_button_name {
            letter-spacing: 0.07em;
            font-family: 'Open Sans SemiBold';
            font-size: 1.3vw;
            padding-right: 0.5vw;
        }`
    }

    button_style() {
        return `
        :host {
            margin: 0px;
            padding: 0px;
        }
        
        @font-face {
            font-family: "Open Sans SemiBold";
            src: url("/fonts/OpenSans-SemiBold.ttf") format("truetype");
        }

        ${this.basic_button_container_style()}            

        #basic_button {
            display: grid;
            grid-template-columns: min-content 1fr;
            align-items: center;
        }
        
        ${this.basic_button_name_style()}

        #button_svg_icon {
            width: 2.5vw;
            min-width: 2em;
         }

        #basic_button_container:hover {
            cursor: pointer;
            color: white;
            background: DeepSkyBlue;
        }
        
        @media screen and (max-width:500px) { 
            #basic_button_name {
                display: none;
            }
            
            #button_svg_icon {
                 width: 3vw;
                 min-width: 2.5em;
            }

         }`;
    }

    render_initial_button() {
        this.shadowRoot.innerHTML = `
        <style>${this.button_style()}</style>
        <h6>SVG Placeholder</h6>`;
    }

}
