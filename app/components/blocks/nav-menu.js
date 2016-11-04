import Ember from 'ember';

const { Component, String: { w } } = Ember;

export default Component.extend({
  tagName: 'nav',
  classNames: w('ui text fixed menu')
});
