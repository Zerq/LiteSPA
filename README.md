This is basically an experimental project to try out a minimalistic approach to writing a SPA app

its currently dependent on also having https://github.com/Zerq/jsxFix-initial
this is a tool to do some post transpilation changes on TSX files  so i can use them in this template...

react is not a dependency at most a devdependency.

The design pholosophy here is to heavily favor plain ecma script... i dont use webpack or any 3rd party module loader only the module loader built into the broweser.
it also support Typescript and  and TSX templates... 

and i use custom elements and the shadow dom etc...

Some nice benefit of this is that the output client code is stupidly small.. since it has no dependencies what so ever... and i have not even tried to minify the code!

so this is pure minimalism....
