import fs from "fs";

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));


class PostTranspileStep {
    static doDirectory(sourceDirectoryPath, outputPath, depth) {
        sourceDir = fs.Dir(sourceDirectoryPath);
        let sourceTsxFiles = sourceDir.GetFiles("*.tsx");
        sourceTsxFiles.foreach(file => {
            let source = file.Name.Replace(".tsx", ".js");
            let outputFilePath = path.join(outputPath, source);

            let depthModifier = "./";
            if (depth > 0) {
                depthModifier = "";

                for (var i = 0; i < depth; i++) {
                    depthModifier = "../" + depthModifier;
                }
            }

            let map = outputFilePath + ".map";
            let text = fs.readFile(outputFilePath, 'utf8');

            text.ReplaceAll(`"react/jsx-runtime";`, `"${depthModifier}libs/litespa/src/react/jsx-runtime.js";`)
                .ReplaceAll("{ className:", "{ class:");

            fixMap(map, depth);
            fs.file.write()

            fs.writeFileSync(outputFilePath, text);
        });

        sourceDir.GetDirectories().foreach(subfolder => {
            var outputSubFolder = path.join(outputPath, subfolder.Name);
            if (fs.Dir.Exists(outputSubFolder)) {
                doDirectory(subfolder, outputSubFolder, depth + 1);
            }

        });
    }

    static fixMap(mapPath, depth) {
        if (fs.file.Exists(mapPath) && depth > 0) {
            let txt = fs.readFile(mapPath, 'utf8');
            let replacer = "src/";
            for (var i = 0; i < depth; i++) {
                replacer = "../" + replacer;
            }

            let oldTxt = `"sourceRoot":"src/"`;
            let newTxt = `"sourceRoot":"${replacer}"`;

            txt = txt.Replace(oldTxt, newTxt);
            fs.writeFileSync(mapPath, txt);
        }
    }

    static Run() {

        if (process.argv.length < 4) {
            process.stdout.write(`JsxFix <source directory> <outputDirectory> (relative directories start with `);
            return;
        }
        
        if (process.argv.length === 4) {

            if (process.argv[2].startsWith(".")) {
                process.argv[2] = path.join(__dirname,  process.argv[2].replaceAll("./", ""));
            }

            if (process.argv[3].startsWith(".")) {
            
                process.argv[3] = path.join(__dirname, process.argv[3].replaceAll("./", ""));
            }
        }

        if (process.argv.length === 2 && fs.Exists(args[0]) && fs.path.Exists(args[3])) {    
            doDirectory(args[2],process.argv[3], 0);
        }
    }
}

PostTranspileStep.Run();