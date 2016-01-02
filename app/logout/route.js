import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  model() {
    return this.get('session').close();
  }
});
