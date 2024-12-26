 import { ComponentCtr } from "./AbsCtr.js";
import { ComponentBase } from "./ComponentBase.js";
import "./Services.js";

 export function Component<T extends ComponentBase>(name: string) {
     return (ctor: ComponentCtr<T>) => {
        window.Omnicatz.ComponentRegistry.Register(name, ctor);     
     };
 }
