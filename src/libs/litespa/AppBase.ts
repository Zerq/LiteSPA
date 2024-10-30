import { ComponentBase } from "./ComponentBase.js";
import { IOC } from "./IOC.js";
import { KVP } from "./KVP.js";
import { LiteSPA } from "./LiteSPA.js";
import { RouterBase } from "./RouterBase.js";
import "./react/customComponentsFix.js";

export abstract class AppBase extends ComponentBase {
    protected router: RouterBase;
    public constructor() {
        super();

        const funcs = async ()=> {
            this.router = IOC.Container.Get(RouterBase);
            await this.LoadViews();      
            this.AppRouting();
            window.addEventListener("hashchange", e => {
                this.router.Route(location.hash);
            });

            console.log("App running");
        };
        funcs().then();
    }
    protected lastView: string;

    public renderView(viewName: string, params = new Array<KVP>(), noReRender = false) {
        let main = this.ElementContainer.querySelector("#spaBody") as HTMLMediaElement;
        if (!main){
            return;
        }

        if (viewName === this.lastView && noReRender) {
          
            const view = main.children[0];
            view.setAttribute("firstRender", "false");
            params.forEach(n => {
                view.setAttribute(n.Name, n.Value);
            });
            return;
        }

        this.lastView = viewName;     
        main.innerHTML = "";

        const obj = <any>{};
        params.forEach(kvp => {
            obj[kvp.Name] = kvp.Value;
        });

        const view = LiteSPA.Instance.NewComponent(viewName, obj);
        view.ElementContainer = main;      
        view.Render();
    }

    public abstract getAppBody(): HTMLElement;

    public abstract LoadViews(): Promise<void>;
    public abstract AppRouting(): void;
}



