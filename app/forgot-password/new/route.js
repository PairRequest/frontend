import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  actions: {
    submit(access_token, password) {
      const user = this.get('user');
      
      return user.resetPassword({
        access_token, password
      });
    }
  }
});
