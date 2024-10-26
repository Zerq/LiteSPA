import { Component, ToElement } from "../CommonLib.js";
import React from "react";

@Component("home-view")
export class Menu extends HTMLElement {

    public static observedAttributes = [];

    public constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    private render() {
        if (this.shadowRoot === null) {
            return;
        }

        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(ToElement(
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
        this.render();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {

    }
}