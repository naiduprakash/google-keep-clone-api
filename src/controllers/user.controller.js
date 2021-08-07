/**
 * modules
 */

class UserController {
  testRoute(req, res, next) {
    res.send({ title: 'Express' });
  }
}

export default new UserController();
