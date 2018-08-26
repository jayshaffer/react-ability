function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component, PropTypes, Children } from "react";

import context from './AbilityContext';
import React from 'react';

var AbilityControl = function (_Component) {
  _inherits(AbilityControl, _Component);

  function AbilityControl() {
    _classCallCheck(this, AbilityControl);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AbilityControl.prototype.renderChildren = function renderChildren(abilityContext) {
    if (this.props.permission, this.props.namespace) {
      {
        Children.only(this.props.children);
      }
    } else {
      return null;
    }
  };

  AbilityControl.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      context.Consumer,
      null,
      function (abilities) {
        return _this2.renderChildren(abilities);
      }
    );
  };

  return AbilityControl;
}(Component);

export default AbilityControl;