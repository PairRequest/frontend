import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  session: inject.service(),
  actions: {
    submit(credentials) {
      return this.get('session').open('api', credentials);
    },
    oauthLogin(provider) {
      return this.get('session').open(provider);
    }
  }
});
