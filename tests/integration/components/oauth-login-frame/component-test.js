import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('oauth-login-frame', 'Integration | Component | oauth login frame', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{oauth-login-frame}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#oauth-login-frame}}
      template block text
    {{/oauth-login-frame}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
