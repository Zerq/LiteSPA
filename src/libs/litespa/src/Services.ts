import { Router , RouterLike} from "./Router.js";
import { ComponentRegistry } from "./ComponentRegistry";
import { ComponentRegistryLike } from "./ComponentRegistryLike";

declare global {
    interface Window  {
        Omnicatz:{
            Router:RouterLike;
            ComponentRegistry:ComponentRegistryLike;
        }
    }
}

window.Omnicatz = {
    ComponentRegistry: new ComponentRegistry(),
    Router: new Router()
};
 
