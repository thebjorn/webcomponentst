var dkiconref = null;  // debugging

class DkIcon extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this._icon_name = null;
        this._dk_icon = null;
        // this._template = () => html`
        //     <style>
        //         @import url('${dk.icon._url}');
        //         @import url('./blueoutline.css');
        //     </style>
        //     <i id="icon-unique-42"></i>
        // `;


        this.root.innerHTML = `
            <style>
                @import url('${dk.icon._url}');
                @import url('./blueoutline.css');
            </style>
        `;

    }

    static get observedAttributes() { return ['value']; }

    attributeChangedCallback(name, oldval, newval) {
        console.info('attribute changed:', name, oldval, newval);
        this._icon_name = newval;
        this.draw();
    }

    connectedCallback() {
        this.draw();
    }

    get value() { console.info('get value', this._icon_name); return this._icon_name; }
    set value(v) {
        console.info('set value', v);
        if (v !== this._icon_name) {
            this._icon_name = v;
            this.setAttribute('value', v);
            // this.draw();   // setAttribute calls draw() in changed callback.
        }
    }

    draw() {
        console.info('draw');
        if (this._dk_icon) this._dk_icon.remove();
        this._dk_icon = dk.icon.make_icon(this._icon_name);
        this.root.appendChild(this._dk_icon);
        // render(this.template())
    }
}

customElements.define('dk-icon', DkIcon);
