module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'pairrequest',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
