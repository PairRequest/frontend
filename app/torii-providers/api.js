import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Object.extend({
  ajax: inject.service(),
  open(data) {
    return this.get('ajax').post('/users/login', { data })
      .then( data => {
        return { access_token: data.id , userId: data.userId };
      });
  },
  close() {
    return this.get('ajax').post('/users/logout');
  }
});