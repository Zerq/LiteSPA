import { ComponentBase } from "../libs/litespa/ComponentBase.js";
import { LiteComponent} from "../libs/litespa/Component.js";
import { ToElement } from "../libs/litespa/ToElement.js";

@LiteComponent("home-view")
export class Menu extends ComponentBase {
    public AttributeChange(attributeMutation: MutationRecord) {
 
    }
    protected postRenderAction(): void {}
    protected render(wrapper:HTMLElement):HTMLElement {
        wrapper.innerHTML = "";
        wrapper.appendChild(ToElement(
            <article>
                <header>
                    <h3>Hello world!</h3>
                </header>
                <main>
                    <p>some text and stuff goes here.......</p>
                </main>
                <footer>By Arch 2024-10-25</footer>
            </article>
        ));
        return wrapper;
    }
}