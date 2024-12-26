import React from "react";
import { Component } from "libs/litespa/src/Component.js";
import { ComponentBase } from "../libs/litespa/src/ComponentBase.js";
import { ToElement } from "libs/litespa/src/ToElement.js";

@Component("home-view")
export class HomeView extends ComponentBase {
    public AddEventListener(type: string, listener: unknown): void {
        this.Root.addEventListener(type, listener as any);
    }
    public SetAttribute(name: string, value: unknown) {
      this.Root.setAttribute(name, value  as string);
    }

    public static observedAttributes = [];

    public constructor(name:string, children: Array<HTMLElement>|HTMLElement) {
        super(name, children);
    }

    public Render(): Promise<void> {
        if (this.Root === null) {
            return;
        }

        this.Root.innerHTML = "";
        this.Root.appendChild(ToElement(
            <article>
                <header>
                    <h3>Hello world!</h3>
                </header>
                <main>
                    <p>some text and stuff goes here.......</p>
                </main>
                <footer>By Arch 2024-10-25</footer>
            </article>
        ));
    }

    public connectedCallback() {
        this.Render().then();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }
}