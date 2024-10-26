import { Component, ToElement } from "../CommonLib.js";
import React from "react";


@Component("omnicatz-spa-view")
export class OmnicatzSPA extends HTMLElement {

    public static observedAttributes = ["section"];

    public constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }


    private render() {
        if (this.shadowRoot === null) {
            return;
        }

        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(ToElement(
            <div>
                <article>
                    <header>
                        <h3 id="intro">Intro</h3>
                    </header>
                    <main>
                        <p>
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                        </p>
                    </main>
                    <footer>By Arch 2024-10-25</footer>
                </article>
                <article>
                    <header>
                        <h3 id="test2">test2</h3>
                    </header>
                    <main>
                        <p>
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                        </p>
                    </main>
                    <footer>By Arch 2024-10-25</footer>
                </article>
                <article>
                    <header>
                        <h3 id="test3">test3</h3>
                    </header>
                    <main>
                        <p>
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                            kjroek tker toket okertoke tkertke tökertk ejtrlkej lkejtrlejrt kjtwl kertölkew rlkwltk<br />
                            hwerkljewhk tjwelkjtewlkrj tewrkjehrkjthwelkrtj hewkltjh lktjhe wkjrth wekjt hwelkj tkejwth kj<br />
                            hwekrjthkwe ljthlkwerjth ltkjwehrtlkjewrh twelkj rthwelkjtrh welkjtrh ewlktjh erltkj wethrklejrt<br />
                            jhwerlkjtewrl ktjhewrt jwetkj etrhrwlk jhetrlkjw htrlkje trhelw ktjhe rlkjthwelkj trewrtkjh ewtkjlet<br />
                        </p>
                    </main>
                    <footer>By Arch 2024-10-25</footer>
                </article>
            </div>
        ));



    }

    public connectedCallback() {
        this.render();
    }

    //public disconnectedCallback() {  }
    //public adoptedCallback() {  }

    public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (name === "section") {
            this.render();
        

            setTimeout(() => {
                const element = this.shadowRoot.getElementById(newValue);

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 0);

        }
    }
}


