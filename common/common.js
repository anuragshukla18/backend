const redis = require('redis');
const JWTR = require('jwt-redis').default;
//const redisClient = redis.createClient();
var redisClient = redis.createClient ({

  host : 'global-allowed-crayfish-32534.upstash.io',

  port : '32534',

  password: '5964da794c424365aa120f1da0c33277'

});
redisClient.on("connect", function () {
  redisClient.stream.setKeepAlive(true, "10000");
});
const jwtr = new JWTR(redisClient);  

module.exports = {
  jwtr: jwtr, 
 // baseUrl : "http://localhost:4000"
  baseUrl : "http://localhost:4000"
};
