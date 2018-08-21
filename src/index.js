import $ from 'jquery';
import __version__ from './version';
import FontAwsome4 from './iconlibs';

let dk = selector => document.querySelector(selector);

Object.assign(dk, {
    __version__,
    icon: new FontAwsome4(),
    ready(fn) { $(fn); }
});

module.exports = dk;
