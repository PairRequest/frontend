import Authenticator from 'ember-simple-auth/authenticators/base';

const {
  inject
} = Ember;

export default Authenticator.extend({
  ajax: inject.service(),
  restore() {
    debugger;
  },
  authenticate({email, password}) {
    let ajax = this.get('ajax');
    return ajax.post('/users/login?include=user', {
      data: { email, password }
    });
  },
  invalidate() {
    
  }
});