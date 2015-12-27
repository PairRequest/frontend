import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Component.extend({
  actions: {
    submit() {
      let password = this.get('password');
      let passwordConfirm = this.get('passwordConfirm');
      // TODO: replace this ember-cp-validations
      let isValid = !isEmpty(password) && 
                    !isEmpty(passwordConfirm) && 
                    password === passwordConfirm;
      if (isValid) {
        this['on-submit']({ password }).catch(({errors})=>{
          this.set('errors', errors);
        });
      }
    }
  }
});
