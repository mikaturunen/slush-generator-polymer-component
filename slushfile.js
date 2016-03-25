/*
 * slush-generator-polymer-component
 * https://github.com/mikaturunen/slush-generator-polymer-component
 *
 * Copyright (c) 2016, Mika Turunen
 * Licensed under the MIT license.
 */

"use strict";

var gulp = require("gulp");
var install = require("gulp-install");
var conflict = require("gulp-conflict");
var template = require("gulp-template");
var rename = require("gulp-rename");
var _ = require("underscore.string");
var inquirer = require("inquirer");
var path = require("path");

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, "");
}

var defaults = (function () {
    var workingDirName = path.basename(process.cwd());
    var homeDir;
	var osUserName;
	var configFile;
	var user;

    if (process.platform === "win32") {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    } else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split("/").pop() || "root";
    }

    configFile = path.join(homeDir, ".gitconfig");
    user = {};

    if (require("fs").existsSync(configFile)) {
        user = require("iniparser").parseSync(configFile).user;
    }

    return {
        appName: workingDirName,
        userName: osUserName || format(user.name || ""),
        authorName: user.name || "",
        authorEmail: user.email || ""
    };
})();

gulp.task("default", function (done) {
    var prompts = [{
        name: "componentNameCamelCase",
        message: "What is the name of the Polymer component you are making (give it in camelCase, example: fooBarThis)?"
    },
	{
		name: "relativeComponentLocation",
		message: "What is the relative URL path for your external components (default: '../../components/')?"
	},
	{
        type: "confirm",
        name: "moveon",
        message: "Continue?"
    }];

    //Ask user set of questions to define what we are actually building.
    inquirer.prompt(prompts, function (answers) {
        if (!answers.moveon) {
            return done();
        } else if (answers.name === "") {
			console.log("No component provided.");
			return done();
		}

		if (answers.relativeComponentLocation === "") {
			relativeComponentLocation = "../../components/";
		}

		if (answers.relativeComponentLocation.slice(-1) !== "/") {
			relativeComponentLocation += "/";
		}
		// URL does not support backslashes. Replace them.
		relativeComponentLocation.replace("\\", "/");

		var turnCamelCaseToDashed = /([a-z])([A-Z])/g;

        //answers.componentNameCamelCase = _.slugify(answers.componentNameCamelCase);
		answers.componentNameDashCase = answers.componentNameCamelCase.replace(turnCamelCaseToDashed, "$1-$2").toLowerCase();

        gulp.src(__dirname + "/templates/**")
            .pipe(template(answers))
            .pipe(rename(function (file) {
                if (file.basename[0] === "_") {
                    file.basename = answers.componentNameDashCase + file.basename.slice(1);
                }
            }))
            .pipe(conflict("./"))
            .pipe(gulp.dest(path.join(process.cwd(), "./components/", "/" + answers.componentNameDashCase)))
            .pipe(install())
            .on("end", function () {
                done();
            });
    });
});
