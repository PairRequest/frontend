import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  session: inject.service(),
  actions: {
    register(credentials) {
      // const flashMessages = this.get('flashMessages');
      const session = this.get('session');
      const user = this.get('user');
      
      user.register(credentials)
        .then((model)=>{
          user.setCurrent(model);
          return session.authenticate('authenticator:api', credentials);
        })
        .catch((errors)=>{
          this.set('errors', errors);
        });
    }
  }
});
