import Adapter from 'torii/adapters/application';
import Ember from 'ember';

const {
  inject,
  RSVP,
  isPresent
} = Ember;

const {
  resolve,
  reject
} = RSVP;

const SESSION_KEY = 'session';

export default Adapter.extend({
  localStorage: inject.service(),
  store: inject.service(),
  
  open(session) {
    const localStorage = this.get('localStorage');

    localStorage.setItem(SESSION_KEY, session);

    return session;
  },
  
  /**
   * Return a promise that resolves is session data is already available
   */
  fetch() {
    const localStorage = this.get('localStorage');

    let session = localStorage.getItem(SESSION_KEY);
    if (isPresent(session)) {
      return resolve(session, `fetch resolves with session data`);
    }
    
    return reject();
  },
  
  close() {
    const localStorage = this.get('localStorage');
    
    localStorage.setItem(SESSION_KEY, null);
        
    return resolve();
  }

});