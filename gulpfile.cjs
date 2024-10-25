const { src, dest } = require("gulp");
const newer = require("gulp-newer");

exports.default = async function () {


    src("./src/assets/*.png", { encoding: false }, { base: "./src/assets" }).pipe(newer('wwwroot/assets/')).pipe(dest("wwwroot/assets/"));

    src([
        "./src/**/*.html",
        "./src/**/*.css",
    ],
        { base: "./src" }).pipe(dest("wwwroot/"));

    src([
        "./src/**/*.ts",
        "./src/**/*tsx"],


        { base: "./src" }).pipe(dest("wwwroot/src/"));
};