const os = require('os');

module.exports = {
  apps: [{
    port: 8080,
    name: "proxy",
    script: "./node_modules/@colyseus/proxy/bin/colyseus-proxy",
    instances: os.cpus().length,
    exec_mode: 'fork',
    env: {
      // Required options:
      HOST: "example.com",
      REDIS_URL: "127.0.0.1:6379",

      // SSL (optional)
      SSL_KEY: "/etc/certs/example.com/privkey.pem",
      SSL_CERT: "/etc/certs/example.com/fullchain.pem",
      SSL_PORT: 443,

      // Optional:
      PORT: 80,
      USE_HTTP2: false,
    }
  }]
}