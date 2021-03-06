/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    torii: {
      sessionServiceName: 'session',
      remoteServiceName: 'iframe',
      // a 'session' property will be injected on routes and controllers
      providers: {
        'github-oauth2': {
          clientId: '296b5e6365a2bb7b5524',
          scope: 'user:email',
          redirectUri: 'http://localhost:3000/api/auth/github'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.torii.providers['github-oauth2']['clientId'] = '67d8b1bf886f5ebd0b44';
    ENV.torii.providers['github-oauth2']['redirectUri'] = 'http://api.pairrequest.com/auth/github';
  }

  return ENV;
};
