import { shallow } from 'enzyme'
import AbilityProvider from '../AbilityProvider'  
import React from 'react'

const definition = {
	permissions: [
		{
			name: 'VIEW_BUTTON',
			roles: ['ADMIN', 'USER']
		}
	]
}

describe('render', () => {
	test('should create a provider context with the correct permissions', () => {
		let element = shallow(
			<AbilityProvider roles={['ADMIN']} definition={definition}>
				<div></div>
			</AbilityProvider>
		)
		expect(element.props().value['VIEW_BUTTON']).toBe(true)
	})
})