
import { Component, Service, ToElement } from "./CommonLib.js";
import "./Components/Menu.js";
import { Menu } from "./Components/Menu.js";

import "./react/customComponentsFix.js";

import { RouterBase } from "./Router.js";
import { IOC } from "./CommonLib.js";

import "./Views/home.js";
import "./Views/about.js";



@Component("my-app")
export class App extends HTMLElement {

    public static observedAttributes = ["app-name"];



    private router: RouterBase;

    private renderView(viewName:string){
        let main = this.shadowRoot.getElementById("spaBody") as HTMLMediaElement;
        main.innerHTML = "";
        const view = document.createElement(viewName);
        main.appendChild(view);
    }

    public constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.router = IOC.Container.Get(RouterBase);


        this.router.RegisterSimplePath("#home", () => this.renderView("home-view"));
        this.router.RegisterSimplePath("#about", () => this.renderView("about-view"));

        window.addEventListener("hashchange", e => {

            this.router.Route(location.hash); 
            
            });
        location.hash = "#home";
    }

    public connectedCallback() {
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(ToElement(
            <div>
                <header>
                    <my-menu id="appMenu" ></my-menu>
                </header>
                <main id="spaBody"></main>
            </div>
        ));

      

        let menu = this.shadowRoot.getElementById("appMenu") as Menu;
        menu.SetItems(
            [
                {
                    Name: "Home",
                    Type: "HashLink",
                    Hash: "home"
                },
                {
                    Name: "About",
                    Type: "HashLink",
                    Hash: "about"
                }
            ]

        );


        requestAnimationFrame(()=> {
            this.router.Route("");
        });
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "app-name") {
            document.title = newValue;
        }
    }
}



