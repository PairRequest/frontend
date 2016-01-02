import Ember from 'ember';

export default Ember.Object.extend({
  /**
   * Used when user is authenticated via the URL
   * such as when the app is accessed from a reset password email
   */
  open(session) {
    return session;
  }
});