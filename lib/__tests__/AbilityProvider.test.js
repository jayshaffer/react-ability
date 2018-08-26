import { shallow } from 'enzyme'
import AbilityProvider from '../AbilityProvider'
import React from 'react'

var definition = {
	rules: [{
		type: 'BUTTON',
		abilities: [{
			name: 'VIEW',
			roles: ['ADMIN', 'USER']
		}]
	}]
}

describe('render', function () {
	test('should create a provider context with the correct permissions', function () {
		var element = shallow(React.createElement(
			AbilityProvider,
			{ roles: ['ADMIN'], definition: definition },
			React.createElement('div', null)
		))
		expect(element.props().value['BUTTON_VIEW']).toBe(true)
	})
})