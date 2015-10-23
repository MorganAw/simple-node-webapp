import React from 'react';
import { Router, Route } from 'react-router';

// Import React components
import { LoginForm } from './components/home_body';
import { AuthSuccess } from './components/auth_success';
import { AuthFail } from './components/auth_fail';

export default [
  <Route path="/" component={ LoginForm } key="home_body" />,
  <Route path="/success" component={ AuthSuccess } key="auth_success" />,
  <Route path="/failure" component={ AuthFail } key="auth_fail" />
];