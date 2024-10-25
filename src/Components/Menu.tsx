import { MenuItem } from "./MenuItem.js"
import { Component, ToElement } from "../CommonLib.js";
import React from "react";


@Component("my-menu")
export class Menu extends HTMLElement {

    public static observedAttributes = ["id"];

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
            <div className="outerWrapper">
                <link rel="stylesheet" href="../assets/menu-component.css" />
            <nav className="mainMenu" id={this.idInternal}>
                <ul className="itemWrapper">
                    {
                        this.itemsInternal?.map((value, index) => {
                            switch (value.Type) {
                                case "ActionLink":
                                    return <li className="ActionLink"><a onClick={value.Action}>{value.Name}</a></li>;
                                case "Link":
                                    return <li className="Link"><a href={"#" + value.Url}>{value.Name}</a></li>;
                                case "HashLink":
                                    return <li className="HashLink"><a href={"#" + value.Hash}>{value.Name}</a></li>;



                            }
                        })
                    }
                    <li className="spring">&nbsp;</li>
                </ul>
            </nav>
            </div>
        ));



    }

    public connectedCallback() {
        this.render();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    private itemsInternal: MenuItem[];
    private idInternal: string;

    public SetItems(list: MenuItem[]) {
        this.itemsInternal = list;
        this.render();
    }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "id") {
            this.idInternal = newValue;
            this.render();
        }
    }
}


