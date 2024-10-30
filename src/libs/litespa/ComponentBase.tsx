import React, { HtmlHTMLAttributes } from "react";
import { ToElement } from "./ToElement.js";
import { LiteSPA } from "./LiteSPA.js";


interface DisposableLike{
    Dispose():void;
}


export abstract class ComponentBase implements DisposableLike {
  public ElementContainer: HTMLElement;
  private observer: MutationObserver;

  private id_: string;
  public get id(): string {
    return this.id_;
  }
  public set id(value: string) {
    this.id_ = value;;
    this.ElementContainer.id = value;
  }

  private class_: string;
  public get class(): string {
    return this.class_;
  }
  public set class(value: string) {
    this.class_ = value;;
    this.ElementContainer.className = value;
  }

    public constructor() {
      this.ElementContainer = document.createElement("div");
      const thisCtr = Object.getPrototypeOf(this).constructor;
      const tagName = LiteSPA.Instance.GetTagNameOf(thisCtr);
      this.ElementContainer.setAttribute("data-TagName", tagName);


      const callback:MutationCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "attributes") {
              this.AttributeChange(mutation);
            }
        }
    };


    const config = { attributes: true };

    this.observer = new MutationObserver(callback)
    this.observer.observe(this.ElementContainer,config)
  }

  public abstract AttributeChange(attributeMutation:  MutationRecord);

  public Dispose(): void {
    this.observer.disconnect();
  }

  public Render(): HTMLElement {
    this.ElementContainer.innerHTML = "";
    this.render(this.ElementContainer);
      this.postRenderAction?.();
      return this.ElementContainer;
  }

  protected abstract postRenderAction(): void;
  protected abstract render(wrapper: HTMLElement);

  public Properties: { [name: string]: any; };
  public Children: Array<HTMLElement>;
  public RenderChildren(): React.ReactElement {
    return this.Children as unknown as React.ReactElement;  //this probably needs work...
  }
}

export function UpdatingProp<T extends ComponentBase>(update: (target: T, k: string) => void) {
  return (target: T, key: string) => {
      target.ElementContainer


      let backingFieldName = key + "_";
      Object.defineProperty(target, key, {
          set: (newValue: string) => {
              target[backingFieldName] = newValue;
              update(target, key)
          },
          get: () => {
              return target[backingFieldName];
          }
      })
  };
}
