import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Component.extend({
  actions: {
    submit() {
      let email = this.get('email');
      // TODO: replace this ember-cp-validations
      let isValid = !isEmpty(email);
      if (isValid) {
        return this['on-submit']({ email }).catch(({errors})=>{
          this.set('errors', errors);
        });
      }
    }
  }
});
