import Ember from 'ember';
import ToriiApplicationRouteMixin from 'torii/routing/application-route-mixin';

export default Ember.Route.extend(ToriiApplicationRouteMixin, {  
  model(params) {
    const session = this.get('session');
    let { access_token, userId } = params;
    if (access_token && userId) {
      // open session with query params
      // this happens when user is authenticated from
      // a link in a reset password email
      return session.open('query', params);
    }
  }
});
