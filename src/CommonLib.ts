
import { ReactElement } from "react";
 

/** abstract class type */
export type AbsCtr<T> = Function & { prototype: T };


/** non-abstract class type */
export interface Ctr<T> {
    new(): T;
}

export function ToElement(element: ReactElement) {
    return <HTMLElement><unknown>element;
}

export interface IocContainer{
    Register<T, V extends T>(absCtr: AbsCtr<T>, ctr: Ctr<V>):void;
    Get<T, V extends T>(ctr: AbsCtr<T>): V;
}

export class IOC{
    private constructor() { }
    public static Container = new IOC();
    private stuff = new Map();
    public Register<T, V extends T>(absCtr: AbsCtr<T>, ctr: Ctr<V>) {

        if (this.stuff.has(absCtr.name)) {
            return;
        }

        const instance = new ctr();
        this.stuff.set(absCtr.name, instance);
    }

    public Get<T, V extends T>(ctr: AbsCtr<T>): V {
        return this.stuff.get(ctr.name);
    }
}


export function Service<T, V extends T>(absCtr: AbsCtr<V>) {
    return function (target: any, propertyKey: string) {
        let instance = IOC.Container.Get(absCtr);
        target[propertyKey]= instance;
    };
}

export function DeclareService<T, V extends T>(absCtr: AbsCtr<V>) {
    return (ctr: Ctr<V>) => {
        IOC.Container.Register(absCtr, ctr);
    };
}





/** attribute that register a customElement on the class... file must be imported though ie 'import "./some.js;' so that this attribute is called... 
 * if you do a 'import { SomeClass } from "./some.js";' it wont run.*/
 export function Component<T extends HTMLElement>(name: string) {
    return (ctor: Ctr<T>) => {
        customElements.define(name, ctor);
    }
}
