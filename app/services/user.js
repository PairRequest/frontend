import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Service.extend({
  store: inject.service(),
  register(attributes) {
    const store = this.get('store');
    
    return store.createRecord('user', attributes).save();
  },
  setCurrent(model) {
    this.set('current', model);
  }
});
