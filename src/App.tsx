
import { Component, Service, ToElement } from "./CommonLib.js";
import "./Components/Menu.js";
import { Menu } from "./Components/Menu.js";

import "./react/customComponentsFix.js";

import { KVP, RouterBase } from "./Router.js";
import { IOC } from "./CommonLib.js";

import "./Views/home.js";
import "./Views/about.js";
import "./Views/test.js";



@Component("my-app")
export class App extends HTMLElement {

    public static observedAttributes = ["app-name"];

    private router: RouterBase;

    private renderView(viewName: string, ...params: KVP[]) {
        let main = this.shadowRoot.getElementById("spaBody") as HTMLMediaElement;
        main.innerHTML = "";
        const view = document.createElement(viewName);

        params.forEach(n => {
            view.setAttribute(n.Name, n.Value)
        });

        main.appendChild(view);
    }

    public constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.router = IOC.Container.Get(RouterBase);

        this.router.RegisterSimplePath("#home", () => this.renderView("home-view"));
        this.router.RegisterSimplePath("#about", () => this.renderView("about-view"));
        this.router.RegisterPath("#test/{intTest}/{boolTest}/{strTest}", (intTest, boolTest, strTest) => this.renderView("test-view", ...[intTest, boolTest, strTest]));

        window.addEventListener("hashchange", e => {
            this.router.Route(location.hash);
        });
     
    }



    private async connectCallBackAsync(): Promise<void>{
     

        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(ToElement(
        <div className="outerWrapper">
            <link rel="stylesheet" href="./assets/main.css" />
            <div className="AppWrapper">

                <header className="AppHeader">
                    <img src="./assets/Ursula.png" alt="Logo" /> <h1 className="AppTitle">Omnicatz</h1> <my-menu id="appMenu" ></my-menu>
                </header>
                <main id="spaBody"></main>
                <footer>
                    &copy; Omnicatz 2024 etc etc footer stuff...
                </footer>
            </div>
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
                },
                {
                    Name: "Test 1",
                    Type: "HashLink",
                    Hash: "test/1/true/bob"
                },
                {
                    Name: "Test 2",
                    Type: "HashLink",
                    Hash: "test/2/false/har"
                },
                {
                    Name: "Test 3",
                    Type: "HashLink",
                    Hash: "test/3/true/zog"
                },
            ]

        );

        requestAnimationFrame(()=> {
            this.router.Route(location.hash);
        });
    }

    public connectedCallback() {
        this.connectCallBackAsync().then();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "app-name") {
            document.title = newValue;
        }
    }
}



function FetchText(arg0: string) {
    throw new Error("Function not implemented.");
}
