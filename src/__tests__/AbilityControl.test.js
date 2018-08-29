import { mount } from 'enzyme'
import AbilityProvider from '../AbilityProvider'  
import AbilityControl from '../AbilityControl'  
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
	test('should not render a controlled component without permissions', () => {
		let element = mount(
			<AbilityProvider roles={['ADMIN']} definition={definition}>
				<AbilityControl permission={'EAT'}>
					<div className="notfind"></div>
				</AbilityControl> 
			</AbilityProvider>
		)
		expect(element.find('.notfind').length).toBe(0)
	})
})

describe('render', () => {
	test('should render a controlled component with permissions', () => {
		let element = mount(
			<AbilityProvider roles={['ADMIN']} definition={definition}>
				<AbilityControl permission={'VIEW_BUTTON'}>
					<div className="notfind"></div>
				</AbilityControl> 
			</AbilityProvider>
		)
		expect(element.find('.notfind').length).toBe(1)
	})
})