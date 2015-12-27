import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  session: inject.service(),
  actions: {
    submit(credentials) {
      // const flashMessages = this.get('flashMessages');
      const session = this.get('session');
      const user = this.get('user');
      
      return session.authenticate('authenticator:api', credentials)
        .then(({userId})=>{
          return this.store.find('user', userId);
        })
        .then(model => {
          user.setCurrent(model);
        });
    }
  }
});
