import { ToElement } from "./libs/litespa/ToElement.js";
import react from "react";
 
export async function Run(){
    await import("./libs/litespa/react/jsx-runtime.js");



    const {Router}  = await import ("./libs/litespa/Router.js");
    Router.InitializeService();  

    await import("./App.js");    
    

    const appStarter = <my-app app-name="Omnicatz"></my-app>;
    document.body.appendChild(ToElement(appStarter));



}