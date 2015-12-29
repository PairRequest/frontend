import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  user: inject.service(),
  flashMessages: inject.service(),
  model(params) {
    const flashMessages = this.get('flashMessages');
    return this.get('user').confirm(params)
      .then(()=>{
        flashMessages.info('Your email was confirmed, please log in.');
        this.transitionTo('login');
      });
  }
});
