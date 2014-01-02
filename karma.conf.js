module.exports = function(config) {
  config.set({

    frameworks: ['jasmine', 'requirejs'],

    // list of files/patterns to load in the browser
    // note this time we are flagging `included: false`
    // This tells karma to make them available but to NOT include a script tag
    files: [
      { pattern: 'scripts/**/*.js', included: false },
      { pattern: 'tests/unit/**/*spec.js', included: false },

      // the only file we want to produce a script tag!
      'tests/unit/test-main.js'
    ],

    // Again, lots of options here - I use PhantomJS locally
    browsers: ['PhantomJS'],

    reporters: ['progress'],

    singleRun: true
  })
}
