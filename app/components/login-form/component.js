import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Component.extend({
  actions: {
    submit() {
      let email = this.get('email');
      let password = this.get('password');
      // TODO: replace this ember-cp-validations
      let isValid = !isEmpty(email) && !isEmpty(password);
      if (isValid) {
        this['on-submit']({ email, password }).catch(({errors})=>{
          this.set('errors', errors);
        });
      }
    }
  }
});
