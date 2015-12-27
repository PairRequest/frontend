import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  actions: {
    submit({email}) {
      const user = this.get('user');
      
      return user.requestPasswordReset(email);
    }
  }
});
