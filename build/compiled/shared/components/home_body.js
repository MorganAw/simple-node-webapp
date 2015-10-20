'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var home_body = _react2['default'].createClass({
  displayName: 'home_body',

  render: function render() {
    console.log('***** Rendering home_body *****');
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h2',
        null,
        'Welcome to MCAw\'s Simple Node Webapp'
      ),
      _react2['default'].createElement(
        'p',
        null,
        'Looks like stuff is running, time to start experimenting'
      )
    );
  }
});

module.exports = home_body;