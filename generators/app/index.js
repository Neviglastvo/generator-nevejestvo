"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to solution folder name
      },
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("nevejestvo"),
      this.destinationPath(this.answers.name),
      { globOptions: { dot: true } }
    );
  }

  install() {
    var npmdir = process.cwd() + "/" + this.answers.name;
    process.chdir(npmdir);

    this.installDependencies({
      bower: false,
      npm: true,
      yarn: true,
    });
  }
};
