module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'scripts/*.js',
      'tests/unit/*.js'
    ],

    // lots of options here - I use PhantomJS locally
    browsers: ['PhantomJS'],

    reporters: ['progress'],

    // I am a fan of singleRun locally
    // This lets you use `karma start` to get a single run
    // There are options for watch and what not though if that is your thing
    singleRun: true
  })
}
