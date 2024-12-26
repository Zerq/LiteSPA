import { ComponentCtr, Ctr } from "./AbsCtr";
import { ComponentBase } from "./ComponentBase";
import { ComponentRegistryLike } from "./ComponentRegistryLike";

export class ComponentRegistry implements ComponentRegistryLike {
    Has(name: string): boolean {
       return Array.from(this.ctrs.keys()).indexOf(name) !== -1;
    }
    private ctrs: Map<string, ComponentCtr<ComponentBase>> = new Map();
    public instances: Map<string, ComponentBase> = new Map();
    public Register(name: string, ctr: ComponentCtr<ComponentBase>) {
        this.ctrs.set(name, ctr);
    }

    public MakeNew(name: string, children: Array<HTMLElement>|HTMLElement): ComponentBase {
        let constructr = this.ctrs.get(name);

        if (constructr === undefined || constructr === null) {
            throw Error("Component not found");
        }

        var newInstance = new constructr(name, children);
        newInstance.Id = crypto.randomUUID();
        this.instances.set(newInstance.Id, newInstance);
        return newInstance;
    }
}
