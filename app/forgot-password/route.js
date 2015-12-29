import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  actions: {
    submit({email}) {
      return this.get('user').requestPasswordReset(email);
    }
  }
});
