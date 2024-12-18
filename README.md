This is basically an experimental project to try out a minimalistic approach to writing a SPA app

react is not a dependency at most a dev dependency.

The design philosophy here is to heavily favor plain ecma script... i don't use webpack or any 3rd party module loader only the module loader built into the browser.
it also support Typescript and  and TSX templates... 

And i use custom elements and the shadow dom etc...

Some nice benefit of this is that the output client code is stupidly small.. since it has no dependencies what so ever and i have not even tried to minify the code!

So this is pure minimalism.... 


I am experiumenting currently with replacin the webcomponnents though since their isolation has detrimental effect like screwing up tab order and some other problems...
