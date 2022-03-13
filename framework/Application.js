const http = require("http");
const Emmiter = require("events");

class Application {
  constructor() {
    this.emmiter = new Emmiter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  addRouter = (router) =>
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method];

        this.emmiter.on(this._getRouterMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });

  _createServer() {
    return http.createServer((req, res) => {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        if (body) req.body = JSON.parse(body);

        this.middlewares.forEach((middleware) => middleware(req, res));
        console.log(req.params);

        const emmited = this.emmiter.emit(
          this._getRouterMask(req.pathname, req.method),
          req,
          res
        );
        !emmited && res.end("404 page");
      });
    });
  }

  listen = (port, handler) => this.server.listen(port, handler);

  _getRouterMask = (path, method) => `[${path}]:[${method}]`;
}

module.exports = Application;
