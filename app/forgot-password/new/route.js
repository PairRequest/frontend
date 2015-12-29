import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  session: inject.service(),
  actions: {
    submit(access_token, email, password) {
      const user = this.get('user');
      const session = this.get('session');
      
      return user.resetPassword({
        access_token, email, password
      })
      .then(()=>{
        return session.authenticate('authenticator:api', { email, password });
      });
    }
  }
});
