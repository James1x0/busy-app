import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display/scroll-reveal', 'Integration | Component | display/scroll reveal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{display/scroll-reveal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#display/scroll-reveal}}
      template block text
    {{/display/scroll-reveal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
