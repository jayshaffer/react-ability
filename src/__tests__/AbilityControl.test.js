import { mount } from 'enzyme'
import AbilityProvider from '../AbilityProvider'  
import AbilityControl from '../AbilityControl'  
import React from 'react'

const definition = {
	rules: [
		{
			type: 'BUTTON',
			abilities: [
				{
					name: 'VIEW',
					roles: ['ADMIN', 'USER']
				}
			]
		}
	]
}

describe('render', () => {
	test('should not render a controlled component without permissions', () => {
		let element = mount(
			<AbilityProvider roles={['ADMIN']} definition={definition}>
				<AbilityControl name={'EAT'} type="BUTTON">
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
				<AbilityControl name={'VIEW'} type="BUTTON">
					<div className="notfind"></div>
				</AbilityControl> 
			</AbilityProvider>
		)
		expect(element.find('.notfind').length).toBe(1)
	})
})