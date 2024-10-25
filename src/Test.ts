 

export function getDoc(): Document{
    try {
        return document;

    }catch(err){
        return undefined;
    }
}

function setStyle(){
    if (getDoc() !== undefined) {
        let style = document.getElementById("testStyle");
        if (!style) {
            style = document.createElement("style");
            style.id = "testStyle";
            style.innerHTML = `
        body { background-color:black;}
           .Good{color:Green;}
    .Info{color:white;}
    .Warn{ color:orange;}
    .Error{color:red;     font-weight: bold;}
    .Debug{ color: silver;}
    .Log{ color:teal;}
        
        `;
        }
        document.head.appendChild(style);
    }
}

export async function TestAsync(name: string, test:  () => Promise<boolean>) { 
    setStyle();
    Text(`-----${name} test-----`, MessageType.Info);
    try {
       return await test();
    } catch (err) {
        Text("X test failed: " + err, MessageType.Warn);
        return false;
    }
    Text(`-------------------------`, MessageType.Info);
}

export function Test(name: string, test: () => boolean) {
    setStyle

    Text(`-----${name} test-----`, MessageType.Info);
    try {
       return test();
    } catch (err) {
        Text("X test failed: " + err, MessageType.Warn);
        return false;
    }
    Text(`-------------------------`, MessageType.Info);
}

export async function TestSuitAsync (tests: ()=> Promise<boolean>){
    let result = await tests();
  
    if (result){
        Text("TestSuit passed", MessageType.Good);
    }else {
        Text("TestSuit failed", MessageType.Warn);
    }

    return result;
}


export enum MessageType {
    Good = "Good",
    Info = "Info",
    Warn = "Warn",
    Error = "Error",
    Debug = "Debug",
    Log = "Log"
}
export function Text(massage: string, style: MessageType) {
    if (getDoc() && document.body) {
        const p = document.createElement("p");
        p.textContent = massage;
        p.className = style.toString();
        document.body.appendChild(p);
    }
    switch (style) {
        case MessageType.Good:
            console.info(massage);
            break;
        case MessageType.Debug:
            console.info(massage);
            break;
        case MessageType.Error:
            console.info(massage);
            break;
        case MessageType.Info:
            console.info(massage);
            break;
        case MessageType.Log:
            console.info(massage);
            break;
        case MessageType.Warn:
            console.info(massage);
            break;
            debugger;
            console.info(massage);
            break;
    }

}

export function Assert(assertion: boolean, fail: string, success: string = ""):boolean {
    //&check;
    if (assertion) {
        Text("✓ passed: ", MessageType.Good);
    } else {
        Text("X failed: " + fail, MessageType.Warn);
    }
    return assertion;
}
