import { Router } from "./Router.js";

import { Test, TestAsync, Text, MessageType, Assert,TestSuitAsync } from "./Test.js";

TestSuitAsync(async ()=> {

    return Test("Router.ParseParams", () => {
    let router = new Router();
    const result = router.ParseParams("#/producs/{searchTerms}/{page}", "#/producs/headphones/3", "searchTerms", "page");
    Text("output was " + result, MessageType.Log);

    return  Assert(result[1] === "headphones", "first out put was not headphones") && 
            Assert(result[2] === "3", "second output was not 3");
}) &&

TestAsync("Router.Route", async () => {
    let promise = new Promise<boolean>((resolve, reject)=> {
        let router = new Router();
        const result = router.RegisterPath("#/producs/{searchTerms}/{page}", (searchTerms, page) => {
            resolve(Assert(true, "route reached correctly"));
        });
        router.Route("#/producs/headphones/3");
    });
    return await promise;
});

});