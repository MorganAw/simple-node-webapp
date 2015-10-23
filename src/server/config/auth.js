import session from 'express-session';
import RDBStore from 'session-rethinkdb';
import flash from 'connect-flash';
import { rdbSesh } from './env_var';

export function auth(app, passport, localStrategy) {
  // Initialize rethink datastore
  const store = new RDBStore(session)(rdbSesh);

  // Initialize session
  app.use(session({
    cookie: { secure: true },
    resave: false,
    saveUninitialized: false,
    secret: 'definitelyasecret',
    store: store
  }));

  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Enable error flashes
  app.use(flash());

  // Configure passport strategy
  passport.use(new localStrategy({
      usernameField: 'webapp_email',
      passwordField: 'webapp_password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      console.log('Supposed to be auth stuff here');
      done(null, false);
/*      rdb.findUserByEmail({ apikey: apikey }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });*/
    }
  ));
};