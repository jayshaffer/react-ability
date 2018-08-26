import { shallow, mount } from 'enzyme'
import AbilityProvider from '../AbilityProvider'
import AbilityControl from '../AbilityControl'
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
	test('should not render a controlled component without permissions', function () {
		var element = mount(React.createElement(
			AbilityProvider,
			{ roles: ['ADMIN'], definition: definition },
			React.createElement(
				AbilityControl,
				{ permission: 'EAT', type: 'BUTTON' },
				React.createElement('div', { className: 'notfind' })
			)
		))
		console.log(element.debug())
		expect(element.find('.notfind').length).toBe(0)
	})
})

describe('render', function () {
	test('should render a controlled component with permissions', function () {
		var element = mount(React.createElement(
			AbilityProvider,
			{ roles: ['ADMIN'], definition: definition },
			React.createElement(
				AbilityControl,
				{ permission: 'VIEW', type: 'BUTTON' },
				React.createElement('div', { className: 'notfind' })
			)
		))
		expect(element.find('.notfind').length).toBe(1)
	})
})