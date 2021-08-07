/**
 * modules
 */
import express from 'express';

import userController from '../controllers/user.controller';

class Routes {
  router;
  constructor() {
    this.router = express.Router();
    this.defineRoutes();
  }
  get routes() {
    return this.router;
  }
  defineRoutes() {
    this.router.get('/', userController.testRoute);
  }
}

export default new Routes().routes;
