/**
 * Module dependencies.
 */
import http from 'http';
import App from './app';
import normalizePort from './utils/normalize-port';

/**
 * Server
 */
class Server extends App {
  server;
  constructor() {
    super();
    this.server = this.createServer();
    
    this.init();
  }

  async init(){
    await super.init()
    this.setPort();
    this.startServer();
  }

  setPort() {
    this.port = normalizePort(process.env.PORT || '3000');
    this.app.set('port', this.port);
  }

  createServer() {
    return http.createServer(this.app);
  }

  startServer() {
    this.server.listen(this.port);
    this.server.on('error', this.onError);
    this.server.on('listening', this.onListening);
  }

  onError = () => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    let bind = typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port;

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
  onListening = () => {
    let addr = this.server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  };
}

new Server();
