import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Service.extend({
  ajax: inject.service(),
  store: inject.service(),
  register(attributes) {
    return this.get('store').createRecord('user', attributes).save();
  },
  confirm(params) {
    return this.get('ajax').request('/users/confirm', {
      data: params
    });
  },
  /**
   * Ask for password change link to be sent to this email address.
   */
  requestPasswordReset(email) {
    return this.get('ajax').post('/users/reset', {
      data: { email }
    });
  }
});
