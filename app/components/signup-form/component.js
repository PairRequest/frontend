import Ember from 'ember';

const {
  isEmpty
} = Ember;

const EMAIL_VERIFICATION_REQUIRED = `
  Please check your email and click on the 
  verification link before logging in.
  `;

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
        this['on-submit']({ email, password })
          .then(() => {
            this.set('detail', EMAIL_VERIFICATION_REQUIRED);
          })
          .catch(({errors})=>{
            this.set('errors', errors);
          });
      }
    }
  }
});
