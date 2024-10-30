import { ComponentBase } from "../libs/litespa/ComponentBase.js";
import { LiteComponent} from "../libs/litespa/Component.js";
import { ToElement } from "../libs/litespa/ToElement.js";

@LiteComponent("test-view")
export class Menu extends ComponentBase {
    public AttributeChange(attributeMutation: MutationRecord) {
 
    }
    protected postRenderAction(): void {}
    protected render(wrapper:HTMLElement):HTMLElement {
        wrapper.innerHTML = "";
        wrapper.appendChild(ToElement(
            <article>
                <dl>
                    <dt>intVal</dt>
                    <dd>{this.intVal}</dd>
                    <dt>intVal</dt>
                    <dd>{this.boolVal}</dd>
                    <dt>intVal</dt>
                    <dd>{this.strVal}</dd>
                </dl>
            </article>
        ));
        return wrapper;
    }


    private intVal:string;
    public get inttest(){
        return this.intVal;
    }
    public set inttest(value:string){
        if (!Number.isInteger(((value as unknown)as number)*1)){
            throw("invalid integer");
        }
        this.intVal = value;
        this.Render();
    }

    private boolVal:string;
    public get booltest(){
        return this.boolVal;
    }
    public set booltest(value:string){  
        if (!(value === "true" || value === "false")){
            throw("invalid boolean");
        }
        this.boolVal = value;
        this.Render();
    }

    private strVal:string;
    public get strTest(){
        return this.strVal;
    }
    public set strtest(value:string){  
        this.strVal = value;
        this.Render();
    }  
}
