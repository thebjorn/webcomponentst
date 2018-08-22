var dkiconref = null;  // debugging

class DkIcon extends HTMLElement {
    constructor() {
        super();
        // we need the fontawsome4 css to be visible to the node, and shadow dom is
        // designed exactly to not do this. Create a regular node for now..
        // const root = this; // .attachShadow({mode: 'open'});
        const root = this.attachShadow({mode: 'open'});
        const style = `
            #icon-unique-42 { font-size: 20px; border: 3px solid red; padding: 4px; }
        `;
        this.src = 'check';


        // // below + global <link> doesn't work for chrome
        // root.innerHTML = `
        //     <i id="icon-unique-42"></i>
        // `;
        root.innerHTML = `
            <style>
                @import url('${dk.icon._url}');
                @import url('./blueoutline.css');
            </style>
            <i id="icon-unique-42"></i>
        `;
        // root.innerHTML = `
        //     <style>@import url('https://static.datakortet.no/font/fa470/css/font-awesome.css');</style>
        //     <i id="icon-unique-42"></i>
        // `;
        this.icon = root.querySelector('#icon-unique-42');
        dkiconref = dk.icon.make_icon('check', this.icon);
    }

    invalidate() {
        // this.icon.setAttribute('src', this.src);
    }
}

customElements.define('dk-icon', DkIcon);
