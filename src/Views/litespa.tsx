import { Component, ToElement } from "../CommonLib.js";
import React from "react";

@Component("lite-spa-view")
export class LiteSPA extends HTMLElement {

    public static observedAttributes = ["section"];

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
            <div>
                <article>
                    <header>
                        <h3 id="intro">Intro</h3>
                    </header>
                    <main>
                        <p>First of all this is 100% not an enterprise solution! this uses the built in module loader in the browser meaning it will mostly not run just about anything out in the wild since everyone jumped on the 3rd party module loader crazy train before the blessed Omnissiah inspired W3C consortium finished the offical standard module format.</p>
                        <p>Thus the world is ruined and perfection is forever lost... if your doing anything commercially where your going to need other libraries look somewhere else and live with heresy! :p</p>
                        <br/>
                        <p>What this is good for is playing around or doing simpler websites where your not expecting to need any external components or you just wanna build it all yourself... all bridges are burn and where all alone out here... well almost...<br/>
                        But its at least a bit tricker to import dependencies... <br/>
                        And on the plus side you don't have to put up with the clutter and bloat.</p>

                    </main>
                    <footer>By Arch 2024-10-25</footer>
                </article>
            </div>
        ));
    }

    public connectedCallback() {
        this.render();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "section") {
            this.render();        

            setTimeout(() => {
                const element = this.shadowRoot?.getElementById(newValue);

                element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 0);
        }
    }
}