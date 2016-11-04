import Ember from 'ember';

const { Component, $, assign } = Ember;

export default Component.extend({
  tagName: '',
  _defaults: {
    reset: true,
    duration: 800
  },

  didInsertElement () {
    let defaults = this.get('_defaults'),
        options = this.get('options');

    window.sr.reveal(this.get('tagName') ? this.$() : $(this.get('selector')), assign({}, defaults, options));

    this._super(...arguments);
  }
});
