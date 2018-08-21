# webcomponentst

Testing various webcomponents in 2018.

- [ ] polymer 3
- [ ] stencil
- [ ] svelte
- [ ] webcomponentsjs polyfill + es6
- [ ] x-tag?
- [ ] lit-html?

## issues
### Native support for window.customElements
One problem you'll run into immediately is that 

    (window.)customElements.define(tagname, class)

wants (_really_ wants) a _real_ class in browsers that support `customElements`.  A class that is transpiled by babel is no longer a _real_ class and the call above will fail with some version of "you need to use `new` when calling a ctor".

### IE11
It's like an anchor around your neck. Nothing? works.

## polymer 3

