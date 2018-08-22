# webcomponentst

Testing various webcomponents in 2018.

- [x] native implementation
- [x] webcomponentsjs polyfill + es6 + babel
- [ ] polymer 3
- [ ] stencil
- [ ] svelte
- [ ] x-tag?
- [ ] lit-html?

## issues
### Native support for window.customElements
One problem you'll run into immediately is that 

    (window.)customElements.define(tagname, class)

wants (_really_ wants) a _real_ class in browsers that support `customElements`.  A class that is transpiled 
by babel is no longer a _real_ class and the call above will fail with some version of "you need to use `new` 
when calling a ctor".

### IE11
It's like an anchor around your neck. Nothing? works.

## native implementation
Only works with Chrome [Aug2018].

## webcomponentsjs polyfill + es6 + babel

`webcomponents-bundle.js` + `custom-elements-es5-adapter.js` + babel compiled es6 classes works, but/and:
 
 - you can't do `this.innerHTML = '..'` since that leads to infinite recursion in babel compiled classes.
 - ergo, you must use shadow dom.
 - only Chrome has shadow dom, for all other browsers styling will bleed through from global scope.
 - if you want to load a style sheet in a shadow dom, you'll need to import them in your shadow 
   dom: `shadow.innerHTML = <style>@import url(..);</style>..` **Except** when the style sheet contains a 
   `@font-face` declaration (like, e.g. fontawsome)
 - for fontawsome you also need to load the style sheet globally (with a `<link ..>`). (this might be a Chrome bug..?)
 - none of the alternatives cause the css to be loaded more than once.  

Coverage:
- [x] chrome
- [x] firefox
- [x] ie11
- [x] edge
