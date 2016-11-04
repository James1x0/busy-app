import Ember from 'ember';
import ScrollRevealInitializer from 'busy-app/initializers/scroll-reveal';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | scroll reveal', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ScrollRevealInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
