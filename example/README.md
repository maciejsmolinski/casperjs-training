# Example CasperJS task

## Script Structure

Every section in the script is heavily commented. The comments often describe the code that follows them and also contains useful links to the documentation.

Example:

``` javascript

/***********************************************************************************************************************
 *                                                                                                                     *
 * First, initialize CasperJS and pass configuration options                                                           *
 *                                                                                                                     *
 * The create method can be simply called without any params `.create()` but unless images and plugins are necessary   *
 * they can be disabled. This speeds up browsing pages a lot.                                                          *
 *                                                                                                                     *
 * Class Documentation: http://casperjs.readthedocs.org/en/latest/modules/casper.html#the-casper-class                 *
 *                                                                                                                     *
 **********************************************************************************************************************/
var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false,
  }
});

```

## Setting Up Environment

First, make sure you have NodeJS (http://nodejs.org/) and CasperJS installed (http://casperjs.org/).
In order to check if these tools are available, simply type in console `node --version` and `casperjs --version`

## Executing the example script

In order to execute the script, please type following command in the console:

``` bash
  casperjs task.js
```

Results should more or less look something like this:

``` bash
✔ Entering css-tricks.com
✔ Collecting Recent Articles
✔ Dumping Articles

[
    "New Poll: How many people touch the CSS in your current main project?",
    "Poll Results: What one specific skill set are you most envious of?",
    "Sublime Text for Front End Developers",
    "A Few Things from Chrome Dev Summit 2014",
    "CSS-Tricks Chronicle XX",
    "#134: A Tour of a Site In-Progress Built with Jekyll, Grunt, Sass, an SVG System, and More"
]
```

## Questions/Problems

Feel free to raise any questions/problems directly with me or just use GitHub's issues.