import { KVP } from "./KVP.js";
import "./react/customComponentsFix.js";
import "./react/jsx-runtime.js";
import { ComponentBase } from "./ComponentBase.js";

export abstract class AppBase extends ComponentBase {
    public constructor(tag:string, children: Array<HTMLElement> | HTMLElement) {
            super(tag, children); 
            this.AppRouting();
            window.addEventListener("hashchange", e => {
            window.Omnicatz.Router.Route(location.hash);
        });

        this.LoadViews().then(() => {
            console.log("App running");
        });

    }
    protected lastView: string;
    public renderView(viewName: string, params = new Array<KVP>(), noReRender = false) {
        if (viewName === this.lastView && noReRender) {
            let main = this.Root.querySelector("#spaBody");
            const view = main.children[0];
            view.setAttribute("firstRender", "false");
            params.forEach(n => {
                view.setAttribute(n.Name, n.Value);
            });
            return;
        }

        this.lastView = viewName;

        let main = this.getAppBody();

        main.innerHTML = "";

        const view = document.createElement(viewName);
        view.setAttribute("firstRender", "true");
        params.forEach(n => {
            view.setAttribute(n.Name, n.Value);
        });


        main.appendChild(view);
    }

    public abstract getAppBody(): HTMLElement;

    public abstract LoadViews(): Promise<void>;
    public abstract AppRouting(): void;
}
