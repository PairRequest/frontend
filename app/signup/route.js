import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  actions: {
    register(params) {
      const flashMessages = this.get('flashMessages');
      const session = this.get('session');
      
      let user = this.store.createRecord('user', params)
        .save()
        .then(()=>{
          return session.restore(user);
        })
        .then(()=>{
          flashMessages.success('You were registered successfully!');          
          this.transitionTo('profile', user);
        })
        .catch((errors)=>{
          this.set('errors', errors);
        });
    }
  }
});
