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
  authenticate({email, password}) {
    let ajax = this.get('ajax');
    return ajax.post('/users/login?include=user', {
      data: { email, password }
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