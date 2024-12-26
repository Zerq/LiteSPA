
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
  
  export const jsx = (tag, props) => {
    const { children } = props;

 
    if (typeof tag === "function") return tag(props, children);
   
   
    if (window.Omnicatz.ComponentRegistry.Has(tag)){


      const element = window.Omnicatz.ComponentRegistry.MakeNew(tag, children);
      Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith("on") && name.toLowerCase() in window) {
          element.AddEventListener(name.toLowerCase().substr(2), value);
        } else {
          element.SetAttribute(name, value);
        }
      });
 
      appendChild(element.Root, []);
      return element;
    }

    const element = document.createElement(tag);
    Object.entries(props || {}).forEach(([name, value]) => {
      if (name.startsWith("on") && name.toLowerCase() in window) {
        element.addEventListener(name.toLowerCase().substr(2), value);
      } else {
        element.setAttribute(name, value);
      }
    });
    appendChild(element, children);
    return element;
  };
  4
  export const jsxs = jsx;