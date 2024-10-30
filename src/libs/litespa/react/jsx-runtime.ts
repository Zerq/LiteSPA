import { LiteSPA } from "../LiteSPA.js";

const add = (parent, child) => {
  parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
};

const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    add(parent, child);
  }
};

export const jsx = (tag: string | Function, props: { [name: string]: any }) => {
  const { children } = props;

  if (typeof tag === "function") return tag(props, children);


  if (LiteSPA.Instance.Has(tag)) {
    const newTag = LiteSPA.Instance.NewComponent(tag, props);
    return newTag.Render();
  }

  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name === "children"){
      return;
    }
    if (name.startsWith("on") && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substring(2), value);
    } else {
      element.setAttribute(name, value);
    }
  });

  appendChild(element, children);
  return element;
};

export const jsxs = jsx;