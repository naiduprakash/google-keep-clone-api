/**
 * modules
 */
import express from 'express';
import logger from 'morgan';
import path from 'path';
import { createConnection } from 'mongoose';
import routes from './routes';

const dbConfig = {
  brandDbURI: process.env.MONGODB_CONNECTION_STRING || '',
  connectOptions: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: true,
  },
};

/**
 * App
 */
class App {
  app;
  constructor() {
    this.app = express();
  }

  async init() {
    try {
      this.addMiddlewares();
      await this.connectDatabse();
    } catch (ex) {
      console.log(`API is failed to initialize! Error:${ex.message}`);
    }
  }

  async connectDatabse() {
    return createConnection(dbConfig.brandDbURI, dbConfig.connectOptions)
      .then((db) => {
        console.log("Connected to mongo database");
        return db;
      })
      .catch((err) => {
        console.log('Mongoose connection error:', err);
        throw err;
      });
  }

  addMiddlewares() {
    this.useExpressMiddleWares();
    this.useLoggerMiddelWare();
    this.useRoutesMiddleware();
  }

  useExpressMiddleWares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  useLoggerMiddelWare() {
    this.app.use(logger('dev'));
  }

  useRoutesMiddleware() {
    this.app.use('/', routes);
  }
}

export default App;
