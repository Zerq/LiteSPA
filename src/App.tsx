 
import { Component } from "./libs/litespa/src/Component.js";
import { AppBase } from "libs/litespa/src/AppBase.js";
import "./Components/Menu.js";
import { Menu } from "./Components/Menu.js";
import "./libs/litespa/src/react/customComponentsFix.js";
import { ToElement } from "libs/litespa/src/ToElement.js";
@Component("my-app")
export class App extends AppBase {
    public AddEventListener(type: string, listener: unknown): void {
        this.Root.addEventListener(type, listener as any);
    }
    
    public SetAttribute(name: string, value: unknown) {
      this.Root.setAttribute(name, value  as string);
    }

    public async LoadViews(): Promise<void> {
        await import("./Views/home.js");
        await import("./Views/about.js");
        await import("./Views/test.js");
        await import("./Views/litespa.js");      
    }

    public AppRouting() {
      window.Omnicatz.Router.RegisterSimplePath("#home", () => this.renderView("home-view"));
      window.Omnicatz.Router.RegisterSimplePath("#about", () => this.renderView("about-view"));
      window.Omnicatz.Router.RegisterPath("#test/{intTest}/{boolTest}/{strTest}", (intTest, boolTest, strTest) => this.renderView("test-view", [intTest, boolTest, strTest]));
      window.Omnicatz.Router.RegisterPath("#litespa/{section}", (section) => this.renderView("lite-spa-view", [section], true));
    }

    public static observedAttributes = ["app-name"];

    public getAppBody() {
        return this.Root?.querySelector("#spaBody") as HTMLElement;
    }

    public async Render(): Promise<void> {
        this.Root.innerHTML = "";
        this.Root.appendChild(ToElement(
            <div className="outerWrapper">
                <link rel="stylesheet" href="./assets/main.css" />
                <div className="AppWrapper">
                    <header className="AppHeader">
                        <div className="headerWrapper">
                            <img src="./assets/Ursula.png" alt="Logo" /> <h1 className="AppTitle">{document.title}</h1> <my-menu id="appMenu" ></my-menu>
                        </div>
                    </header>
                    <main id="spaBody"></main>
                    <footer>
                        &copy; Omnicatz 2024 etc etc footer stuff...
                    </footer>
                </div>
            </div>
        ));

        let menu = this.Root.querySelector("#appMenu") as Menu;
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
                {
                    Name: "Invert",
                    Type: "ActionLink",
                    Action: () => {
                        //initially undefined
                        if (document.body.style.backgroundColor === "white") {
                            document.body.style.mixBlendMode = "normal";
                            document.body.style.backgroundColor = "black"
                        } else {
                            document.body.style.mixBlendMode = "exclusion";
                            document.body.style.backgroundColor = "white"
                        }
                    }
                },
                {
                    Name: "LiteSPA Documentation",
                    Type: "HashLink",
                    Hash: "litespa/Intro"
                },
            ]
        );

        requestAnimationFrame(() => {
           window.Omnicatz.Router.Route(location.hash);
        });
    }

    public connectedCallback() {
        this.Render().then();
    }
    
    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "app-name") {
            document.title = newValue;
            this.Render().then();
        }
    }
}