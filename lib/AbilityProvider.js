function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called') } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

import { Component, PropTypes, Children } from 'react'
import context from './AbilityContext'
import AbilityCollection from './AbilityCollection'

import React from 'react'

var AbilityProvider = function (_Component) {
	_inherits(AbilityProvider, _Component)

	function AbilityProvider() {
		_classCallCheck(this, AbilityProvider)

		return _possibleConstructorReturn(this, _Component.apply(this, arguments))
	}

	AbilityProvider.prototype.render = function render() {
		var abilityCollection = new AbilityCollection(this.props.definition, this.props.roles)
		return React.createElement(
			context.Provider,
			{ value: abilityCollection.abilities },
			Children.only(this.props.children)
		)
	}

	return AbilityProvider
}(Component)

export default AbilityProvider