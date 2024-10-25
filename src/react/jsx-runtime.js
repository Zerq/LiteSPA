"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxs = exports.jsx = void 0;
var add = function (parent, child) {
    parent.appendChild((child === null || child === void 0 ? void 0 : child.nodeType) ? child : document.createTextNode(child));
};
var appendChild = function (parent, child) {
    if (Array.isArray(child)) {
        child.forEach(function (nestedChild) { return appendChild(parent, nestedChild); });
    }
    else {
        add(parent, child);
    }
};
var jsx = function (tag, props) {
    var children = props.children;
    if (typeof tag === "function")
        return tag(props, children);
    var element = document.createElement(tag);
    Object.entries(props || {}).forEach(function (_a) {
        var name = _a[0], value = _a[1];
        if (name.startsWith("on") && name.toLowerCase() in window) {
            element.addEventListener(name.toLowerCase().substr(2), value);
        }
        else {
            element.setAttribute(name, value);
        }
    });
    appendChild(element, children);
    return element;
};
exports.jsx = jsx;
4;
exports.jsxs = exports.jsx;
