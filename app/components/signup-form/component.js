import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Component.extend({
  actions: {
    submit() {
      let email = this.get('email');
      let password = this.get('password');
      let passwordConfirm = this.get('passwordConfirm');
      // TODO: replace this ember-cp-validations
      let isValid = !isEmpty(email) && !isEmpty(password) && 
                    !isEmpty(passwordConfirm) && 
                    password === passwordConfirm;
      if (isValid) {
        this['on-submit']({ email, password }).catch(({errors})=>{
          this.set('errors', errors);
        });
      }
    }
  }
});
