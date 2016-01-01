import Ember from 'ember';
import GitHubOauth2Provider from 'torii/providers/github-oauth2';
import config from 'frontend/config/environment';

let redirectUri     = Ember.get(config, 'torii.providers.github-oauth2.redirectUri');

export default GitHubOauth2Provider.extend({
  redirectUri,
  responseParams: [ 'access_token', 'userId' ],
  open: function(options){
    let provider        = this.get('name');
    let url             = this.buildUrl();
    let responseParams  = this.get('responseParams');
    
    return this.get('popup').open(url, responseParams, options);
  }
});