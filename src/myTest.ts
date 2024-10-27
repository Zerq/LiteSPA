import { Router } from "./libs/litespa/index.js";

import { Test, TestAsync, Text, MessageType, Assert,TestSuitAsync } from "./Test.js";

TestSuitAsync(async ()=> {

    return Test("Router.ParseParams", () => {
    let router = new Router();
    const result = router.ParseParams("#/products/{searchTerms}/{page}", "#/products/headphones/3", ...["searchTerms", "page"]);
    Text("output was " + result, MessageType.Log);

    return  Assert(result[1].Value === "headphones", "first out put was not headphones") && 
            Assert(result[2].Value === "3", "second output was not 3");
}) &&

TestAsync("Router.Route", async () => {
    let promise = new Promise<boolean>((resolve, reject)=> {
        let router = new Router();
        const result = router.RegisterPath("#/products/{searchTerms}/{page}", (searchTerms, page) => {
            resolve(Assert(true, "route reached correctly"));
        });
        router.Route("#/products/headphones/3");
    });
    return await promise;
});

});