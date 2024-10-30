import { Ctr } from "./AbsCtr.js";
import { ComponentBase } from "./ComponentBase.js";
import { LiteSPA } from "./LiteSPA.js";

export function Component<T extends HTMLElement>(name: string) {
    return (ctor: Ctr<T>) => {      
        customElements.define(name, <Ctr<HTMLElement>>ctor);
    };
}
export function LiteComponent<T extends ComponentBase>(name: string) {
    return (ctor: Ctr<T>) => {

            LiteSPA.Instance.Register(name, <Ctr<ComponentBase>>ctor);

    };
}



