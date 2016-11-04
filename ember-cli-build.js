const EmberApp = require('ember-cli/lib/broccoli/ember-app'),
      fs = require('fs'),
      vendorDir = JSON.parse(fs.readFileSync('./.bowerrc')).directory + '/';

const includes = [
  'scrollreveal/dist/scrollreveal.js'
];

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'bower_components/semantic-ui'
      ],
      plugins: [ require('less-plugin-glob') ]
    },

    SemanticUI: {
      import: {
        css: false,
        javascript: true,
        fonts: true
      }
    }
  });

  includes.forEach(include => app.import(vendorDir + include));

  return app.toTree();
};
