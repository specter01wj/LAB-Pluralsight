# Readme for AngularJS Patterns: Clean Code

## Sample projects

Sample projects are located in [https://github.com/johnpapa/ng-demos](https://github.com/johnpapa/ng-demos) in the modular and cc-bmean folders.

Installation instructions and setup can be found in the readme files in those respective folders.

## Requirements

- node
- bower
- gulp
- mongo (for the cc-bmean project only)

## Troubleshooting NPM and Bower

**Q. Why won't my server start?**

**A.** Make sure your node modules are installed. Try running from the terminal.

    `npm install`

**Q. Why does the browser seem to hang on the splash page?**

**A.** Open your browser Developer Tools and check what errors are displayed. Often this is either a missing file or a JavaScript error.

**Q. Why does the browser show several files are not loaded in bower_components?**

**A.** Make sure your bower packages are installed. Try running from the terminal.

    `bower install`

**Q. Why won't mongo run?**

**A.** Check the mongo instructions in the project's github repository in cc-bmean folder's readme file for help.
