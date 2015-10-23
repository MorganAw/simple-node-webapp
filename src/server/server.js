import express from 'express';
import favicon from 'serve-favicon';
import passport from 'passport';
import { Strategy as localStrategy } from 'passport-local';

import { auth } from './config/auth';
// import * as rdb from './datastore';

// Import self-generated methods
import { express_router } from './config/routes';

const app = express();
var router = express.Router();

// Configure Jade
app.set('views', './src/shared/views');
app.set('view engine', 'jade');

// Set static & favicon paths
app.use(express.static(__dirname+'/../../../static'));
app.use(favicon(__dirname+'/../../../static/img/favicon.ico'));

// Set up request middleware
// Ex: - cookieParser/bodyParser

// Passport auth config
auth(app, passport, localStrategy);

// Handle routing
express_router(app, router, passport);

// Start the server
var server = app.listen(process.env.PORT || 8000, () => {
	var host = server.address().address;
	var port = server.address().port;
	var mode = app.settings.env;

	console.log('App listening at http://%s:%s in %s mode', host, port, mode);
});
