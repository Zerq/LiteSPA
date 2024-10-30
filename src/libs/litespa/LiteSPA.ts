import { Ctr } from "./AbsCtr";
import { ComponentBase } from "./ComponentBase";


export class LiteSPA {
  private constructor() { }
  private static instance: LiteSPA;
  public static get Instance(): LiteSPA {
    if (!this.instance) {
      this.instance = new LiteSPA();
    }
    return LiteSPA.instance;
  }

  private components: Map<string, Ctr<ComponentBase>> = new Map();
  private componentsReverse: Map<Ctr<ComponentBase>,string> = new Map();
  

  public GetTagNameOf(ctr:Ctr<ComponentBase>){
    return this.componentsReverse.get(ctr);  
  }
  
  public Register(tagName: string, component: Ctr<ComponentBase>) {
    this.components.set(tagName, component);
    this.componentsReverse.set(component, tagName);
  }

  public Has(tagName: string) {
    return this.components.has(tagName);
  }

  public NewComponent(tagName: string, params: { [name: string]: any; }) {
    const ctr = this.components.get(tagName);
    if (!ctr){
      throw new Error("failed to insttantiate " + tagName);
    }
    const instance = new ctr();
    for (let paramName in params) {
      instance[paramName] = params[paramName];
      instance.ElementContainer.setAttribute(paramName,  params[paramName]);

    }

    if (params["children"]){
      instance.Children = params["children"];
    }

    return instance;
  }
}
