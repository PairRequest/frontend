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
  /**
   * Provide new password to be used
   */
  resetPassword({ accessToken, password }) {
    return this.get('ajax').post('/reset-password', {
      data: {
        password,
        confirmation: password,
        headers: {
          access_token: accessToken
        }
      }
    });
  },
  /**
   * Ask for password change link to be sent to this email address.
   */
  requestPasswordReset(email) {
    return this.get('ajax').post('/users/reset', {
      data: { email }
    });
  },
  setCurrent(model) {
    this.set('current', model);
  }
});
