import Ember from 'ember';

const {
  RSVP,
  run
} = Ember;

export default Ember.Component.extend({
  showFrame() {
    this.set('is-frame-visible', true);
  },
  hideFrame() {
    this.set('is-frame-visibile', false);
  },
  onAuthenticate(provider) {
    return new RSVP.Promise((resolve, reject) => {
      run.scheduleOnce('afterRender', ()=>{
        this['on-authenticate'](provider).then(resolve, reject);
      });
    }, 'wrapper for OAuthLoginFrame#onAuthenticate afterRender');
  },
  actions: {
    authenticate(provider) {
      this.showFrame();
      return this.onAuthenticate(provider).finally(()=>{
        this.hideFrame();
      });
    }
  }
});
