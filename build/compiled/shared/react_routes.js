'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

// Import React components

var _componentsHome_body = require('./components/home_body');

var _componentsHome_body2 = _interopRequireDefault(_componentsHome_body);

exports['default'] = [_react2['default'].createElement(_reactRouter.Route, { component: _componentsHome_body2['default'], path: '/' })];
module.exports = exports['default'];