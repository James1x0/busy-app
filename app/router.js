import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shop', function() {
    this.route('category', { path: '/:category' });
  });
});

export default Router;
