import { LiteComponent } from "./libs/litespa/Component.js";
import { ToElement } from "./libs/litespa/ToElement.js";
import { AppBase } from "./libs/litespa/AppBase.js";
import "./Components/Menu.js";
import { Menu } from "./Components/Menu.js";
import { UpdatingProp } from "./libs/litespa/ComponentBase.js";

@LiteComponent("my-app")
export class App extends AppBase {
    public AttributeChange(attributeMutation: MutationRecord) {
 
    }
    public async LoadViews(): Promise<void> {
        await import("./Views/home.js");
        await import("./Views/about.js");
        await import("./Views/test.js");
        await import("./Views/litespa.js");
    }

    public AppRouting() {
        this.router.RegisterSimplePath("#home", () => this.renderView("home-view"));
        this.router.RegisterSimplePath("#about", () => this.renderView("about-view"));
        this.router.RegisterPath("#test/{inttest}/{booltest}/{strtest}", (inttest, booltest, strtest) => this.renderView("test-view", [inttest, booltest, strtest]));
        this.router.RegisterPath("#litespa/{section}", (section) => this.renderView("lite-spa-view", [section], true));
    }

    public getAppBody() {
        return this.ElementContainer.querySelector("#spaBody") as HTMLElement;
    }

    protected render(wrapper: HTMLElement): HTMLElement {
        wrapper.appendChild(ToElement(
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
        return this.ElementContainer;
    }

    protected postRenderAction() {
        let menu = this.ElementContainer.querySelector("#appMenu") as Menu;
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
            this.router.Route(location.hash);
        });

    };

    @UpdatingProp((t, k) => {
        console.log(t[k]);
    })
    public appname: string;
}