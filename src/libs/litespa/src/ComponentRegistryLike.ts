import { ComponentCtr, Ctr } from "./AbsCtr";
import { ComponentBase } from "./ComponentBase";



export interface ComponentRegistryLike {
    Register(name: string, constructoir: ComponentCtr<ComponentBase>): void;
    MakeNew(name: string, children: Array<HTMLElement>|HTMLElement): ComponentBase;
    Has(name:String):boolean;
}
