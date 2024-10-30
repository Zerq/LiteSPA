import { ComponentBase } from "../libs/litespa/ComponentBase.js";
import { LiteComponent} from "../libs/litespa/Component.js";
import { ToElement } from "../libs/litespa/ToElement.js";

@LiteComponent("about-view")
export class Menu extends ComponentBase {
    public AttributeChange(attributeMutation: MutationRecord) {
 
    }
    protected postRenderAction(): void {}
    protected render(wrapper:HTMLElement):HTMLElement {
        wrapper.innerHTML = "";
        wrapper.appendChild(ToElement(
            <article>
                <header>
                    <h3>About this template</h3>
                </header>
                <main>
                    <p>
                        This is basically my attempt at making a SPA that is as bare bones as possible with nearly no dependencies what so ever!
                        <br/>
                        What ever bloat there is is strictly on the pre-transpile end!  bloated tooling slimed down minimal result!
                        <br/> 
                        And ecmascript native solutions where possible!
                    </p>
                </main>
                <footer>By Arch 2024-10-25</footer>
            </article>
        ));
        return wrapper;
    }
}