/***********************************************************************************************************************
 *                                                                                                                     *
 * In this example, we'll be collecting recent article titles from css-tricks.com website                              *
 *                                                                                                                     *
 * Let's initiate variable that will be containing all article titles as an empty array                                *
 *                                                                                                                     *
 **********************************************************************************************************************/
var recentArticles = [];


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



/***********************************************************************************************************************
 *                                                                                                                     *
 * In order to start browsing with CasperJS, we need to provide start url using `.start(url, [callback])` method       *
 *                                                                                                                     *
 * Method Documentation: http://docs.casperjs.org/en/latest/modules/casper.html#start                                  *
 *                                                                                                                     *
 **********************************************************************************************************************/
casper.start('http://css-tricks.com/', function () {

  // CasperJS offers useful debugging tool that prints information in console: `Casper.prototype.echo`
  // * Documentation: http://docs.casperjs.org/en/latest/modules/casper.html#echo
  // * Colors: http://docs.casperjs.org/en/latest/modules/colorizer.html#colorizer-module
  this.echo('✔ Entering css-tricks.com', 'COMMENT');
});



/***********************************************************************************************************************
 *                                                                                                                     *
 * Even though we could start collecting data from page in `.start(url, [callback])` method via callback               *
 * for readability purposes we'll be doing everything step by step using `.then(callback)` method                      *
 *                                                                                                                     *
 * Method Documentation: http://docs.casperjs.org/en/latest/modules/casper.html#then                                   *
 *                                                                                                                     *
 **********************************************************************************************************************/
casper.then(function () {
  this.echo('✔ Collecting Recent Articles', 'COMMENT');

  // We can execute code directly on the page (think - execute in web developer tools console when you're browsing page)
  // by using `Casper.prototype.evaluate(callback)` method (http://docs.casperjs.org/en/latest/modules/casper.html#evaluate)

  recentArticles = this.evaluate(function () {

    // This code gets actually executed on the webpage and the results get assigned to the `recentArticles` variable
    return $('.module-blogpost h2').toArray().map(function (heading) {
      return $(heading).text().trim();
    });

  });

});


/***********************************************************************************************************************
 *                                                                                                                     *
 * Once previous steps are completed and data stored in `recentArticles` variable, it's pretty straightforward         *
 * to dump variable contents in console by requiring `utils` module                                                    *
 *                                                                                                                     *
 * Module Documentation: http://casperjs.readthedocs.org/en/latest/modules/utils.html                                  *
 *                                                                                                                     *
 **********************************************************************************************************************/
casper.then(function () {
  this.echo('✔ Dumping Articles\n', 'COMMENT');

  require('utils').dump(recentArticles);
});


/***********************************************************************************************************************
 *                                                                                                                     *
 * Even though we defined all steps CasperJS needs to make in order to satisfy our needs,                              *
 * executing `casperjs task.js` in your console won't return anything. This is because we didn't tell CasperJS         *
 * to actually start executing all steps we defined                                                                    *
 *                                                                                                                     *
 * We can simply achieve this by using `Casper.prototype.run` method                                                   *
 *                                                                                                                     *
 * Method Documentation: http://docs.casperjs.org/en/latest/modules/casper.html#run                                    *
 *                                                                                                                     *
 **********************************************************************************************************************/
casper.run();
