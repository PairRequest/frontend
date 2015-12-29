import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  inject
} = Ember;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: inject.service(),
  model(params) {
    const session = this.get('session');
    let { access_token, userId } = params;
    if (access_token && userId) {
      return session.authenticate('authenticator:api', { access_token, userId } );
    }
  }
});
