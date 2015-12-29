import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('signup');
  this.route('profile', function() {
    this.route('edit');
  });
  this.route('forgot-password', function(){
    this.route('new');
  });
  // don't change this route because the user is directed here to confirm the email address
  this.route('confirm', function() {});
});

export default Router;
