import Authenticator from 'ember-simple-auth/authenticators/base';

const {
  inject,
  RSVP
} = Ember;

export default Authenticator.extend({
  ajax: inject.service(),
  restore(session) {
    return RSVP.resolve(session);    
  },
  authenticate(credentials) {
    let { access_token } = credentials;
    if (access_token) {
      return RSVP.resolve(credentials);
    }
    
    let ajax = this.get('ajax');
    return ajax.post('/users/login', {
      data: credentials
    });
  },
  invalidate({id}) {
    let ajax = this.get('ajax');
    return ajax.post('/users/logout', {
      data: { access_token: id }
    })
    .catch(()=>{
      // let it succeed when request fails
    });
  }
});