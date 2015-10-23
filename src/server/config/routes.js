import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import react_routes from '../../shared/react_routes';

import util from 'util';

export function express_router(app, router, passport) {
  // Root path
  router.get('/', (req, res) => {
    console.log('***** Getting route \'%s\' *****', req.url);
    react_routing(req, res);
  });

  // Success/Fail paths
  router.get('/success', (req, res) => {
    console.log('***** Getting route \'%s\' *****', req.url);
    react_routing(req, res);
  });

  router.get('/failure', (req, res) => {
    console.log('***** Getting route \'%s\' *****', req.url);
    react_routing(req, res);
  });

  // Handle React-routed components
  function react_routing(req, res) {
    console.log('Routing url: '+req.url);
    match({ routes: react_routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        console.log(renderProps);
        res.status(200).render('index', { stuff: renderToString(<RoutingContext { ...renderProps } />) });
      } else {
        res.status(404).send('Not found');
      }
    });
  }

  // Login path
  router.post('/login',
    (req, res) => {
      res.status(302).redirect('/failure');
    }
  );

  // Mount the router on the app
  app.use('/', router);
}