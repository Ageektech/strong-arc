var LandingView = (function () {
  var EC = protractor.ExpectedConditions;
  function LandingView() {
    this.landingTitle  = element(by.css('.landing-title'));
    this.composerAppCommand = element(
      by.css('.sl-app a[ui-sref="composer"]'));
    this.buildDeployAppCommand = element(
      by.css('.sl-app a[ui-sref="build-deploy"]'));
    this.processManagerAppCommand = element(
      by.css('.sl-app a[ui-sref="process-manager"]'));
    this.metricsAppCommand = element(
      by.css('.sl-app a[ui-sref="metrics"]'));
    this.tracingAppCommand = element(
      by.css('.sl-app a[ui-sref="tracing"]'));
    this.profilerAppCommand = element(
      by.css('.sl-app a[ui-sref="profiler"]'));

    this.openComposerView = function() {
      browser.driver.wait(
        EC.presenceOf(this.composerAppCommand),
      10000);
      this.composerAppCommand.click();
      browser.driver.wait(
        EC.presenceOf(
          element(by.css('.ia-project-title-header-container'))
        ),
      10000);
    };

    this.waitUntilLoaded = function() {
      browser.get('http://127.0.0.1:9800/#/');
      browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
          return url === 'http://127.0.0.1:9800/#/';
        });
      }, 20000);
      browser.waitForAngular();
    };

    this.get = function() {
      browser.get('http://127.0.0.1:9800/#/');
    };
  }
  return LandingView;
})();

module.exports = LandingView;
