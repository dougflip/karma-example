// Check here for ref: http://karma-runner.github.io/0.10/plus/requirejs.html
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // points to the ROOT of our scripts
    // when using require, this means that "/" will resolve to this directory
    baseUrl: '/base/scripts',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});