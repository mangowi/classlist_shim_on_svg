if (!("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {
var addClassListtoPrototype = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'classList');
    Object.defineProperty(SVGElement.prototype, 'classList', addClassListtoPrototype);
}