module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        exec: {
            copy: "mkdir npm-publish || true && cp -r main.js waudsprite.js package.json LICENSE README.md ./npm-publish/",
            npm: "npm publish ./npm-publish/ && rm -r npm-publish"
        }
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.registerTask("default", ["exec"]);
};