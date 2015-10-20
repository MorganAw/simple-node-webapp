'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.express_router = express_router;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactRouter = require('react-router');

var _sharedReact_routes = require('../../shared/react_routes');

var _sharedReact_routes2 = _interopRequireDefault(_sharedReact_routes);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function express_router(app, router) {
  // Root path
  router.get('/', function (req, res) {
    console.log('***** Getting route path *****');
    (0, _reactRouter.match)({ routes: _sharedReact_routes2['default'], location: req.url }, function (error, redirectLocation, renderProps) {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        res.status(200).render('index', { stuff: (0, _reactDomServer.renderToString)(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps)) });
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  // Mount the router on the app
  app.use('/', router);
}

/*{
  "key":null,
  "ref":null,
  "props": {
    "children": {
      "key":null,
      "ref":null,
      "props": {
        "path":"/"
      },
      "_owner":null,
      "_store":{}
    }
  },
  "_owner":null,
  "_store":{}
}*/