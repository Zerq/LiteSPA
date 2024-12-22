import { ReactElement } from "react";
import { Ctr } from "./AbsCtr";
import { glob } from "fs";




export abstract class ComponentBase {
    public abstract get Id(): string;
    public abstract set Id(val: string);
    public abstract Render(): ReactElement;
    public Destruct(): void{
        (<ComponentRegistry> window.Omnicatz.ComponentRegistry).instances.delete(this.Id);
    }
}

export interface ComponentRegistryLike {
    Register(name: string, constructoir: Ctr<ComponentBase>): void;
    MakeNew(name: string): ComponentBase;
}



class ComponentRegistry implements ComponentRegistryLike {
    private ctrs: Map<string, Ctr<ComponentBase>> = new Map();
    public instances: Map<string, ComponentBase> = new Map();
    public Register(name: string, ctr: Ctr<ComponentBase>) {
        this.ctrs.set(name, ctr);
    }

    public MakeNew(name: string): ComponentBase {
        let constructr = this.ctrs.get(name);

        if (constructr === undefined || constructr  === null){
            throw Error("Component not found");
        }

        var newInstance=  new constructr();
        newInstance.Id = crypto.randomUUID();

        this.instances.set(newInstance.Id, newInstance);

        return newInstance;
    }

}

declare global {
    interface Window  {
        Omnicatz:{
            ComponentRegistry:ComponentRegistryLike;
        }
    }
}

window.Omnicatz = {
    ComponentRegistry: new ComponentRegistry()
};