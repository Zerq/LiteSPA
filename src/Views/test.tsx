import { Component, ToElement } from "../CommonLib.js";
import React from "react";

@Component("test-view")
export class Test extends HTMLElement {

    public static observedAttributes = ["intVal", "boolTest", "strTest"];

    public constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    private render() {
        if (this.shadowRoot === null) {
            return;
        }

        if (!this.getAttribute("inttest")){
            return;
        }
        
        if (!this.getAttribute("booltest")){
            return;
        }

        if (!this.getAttribute("strtest")){
            return;
        }
        
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(ToElement(
            <article>
                <dl>
                    <dt>intVal</dt>
                    <dd>{this.getAttribute("inttest")}</dd>

                    <dt>intVal</dt>
                    <dd>{this.getAttribute("booltest")}</dd>

                    <dt>intVal</dt>
                    <dd>{this.getAttribute("strtest")}</dd>
                </dl>
            </article>
        ));
    }

    public connectedCallback() {
        this.render();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "inttest" ||name === "booltest" ||name === "strtest" ){
            this.render();
        }      
    }
}