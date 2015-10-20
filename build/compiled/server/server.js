'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

// Import self-generated methods

var _configRoutes = require('./config/routes');

var app = (0, _express2['default'])();
var router = _express2['default'].Router();

// Configure Jade
app.set('views', './src/shared/views');
app.set('view engine', 'jade');

// Set static & favicon paths
app.use(_express2['default']['static'](__dirname + '/../../../static'));
app.use((0, _serveFavicon2['default'])(__dirname + '/../../../static/img/favicon.ico'));

// Set up request middleware
// Ex: - cookieParser/bodyParser

// Handle routing
(0, _configRoutes.express_router)(app, router);

// Start the server
var server = app.listen(process.env.PORT || 8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	var mode = app.settings.env;

	console.log('App listening at http://%s:%s in %s mode', host, port, mode);
});