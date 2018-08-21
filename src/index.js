import $ from 'jquery';
import __version__ from './version';

let dk = selector => document.querySelector(selector);

Object.assign(dk, {
    __version__: __version__,
    ready(fn) { $(fn); }
});

export default dk;
