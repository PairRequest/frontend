/*jshint node:true*/
var proxyPath = '/--/proxies/api';
var proxyTarget = process.env.PROXY || 'localhost:3000';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    req.headers.host = proxyTarget;
    proxy.web(req, res, { target: 'http://' + proxyTarget });
  });
};
