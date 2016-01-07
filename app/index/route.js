import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit(params) {
      return this.store.createRecord('invitation', params).save();
    }
  }
});
