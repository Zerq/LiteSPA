import { ReactElement } from "react";

export abstract class ComponentBase {
    public constructor(protected componentName:string, protected children:Array<HTMLElement>| HTMLElement){
        this.Id = crypto.randomUUID();
        this.Root = document.createElement("div");
        this.Root.id = this.Id; 
    }

    public Id: string;
    public Root: HTMLElement;
    public abstract Render(): Promise<void>;
    public abstract AddEventListener(type: string, listener: unknown): void;
    public abstract SetAttribute(name:string, value:unknown);
}