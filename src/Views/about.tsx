import { Component, ToElement } from "../libs/litespa/index.js";
import React from "react";

@Component("about-view")
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
                    <h3>About this template</h3>
                </header>
                <main>
                    <p>
                        This is basically my attempt at making a SPA that is as bare bones as possible with nearly no dependencies what so ever!
                        <br/>
                        What ever bloat there is is strictly on the pre-transpile end!  bloated tooling slimed down minimal result!
                        <br/> 
                        And ecmascript native solutions where possible!
                    </p>
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