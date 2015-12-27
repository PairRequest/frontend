import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Service.extend({
  ajax: inject.service(),
  store: inject.service(),
  register(attributes) {
    const store = this.get('store');
    
    return store.createRecord('user', attributes).save();
  },
  resetPassword() {
    const ajax = this.get('ajax');
    
  },
  requestPasswordReset() {
    
  },
  setCurrent(model) {
    this.set('current', model);
  }
});
