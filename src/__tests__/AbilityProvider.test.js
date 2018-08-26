import { shallow } from 'enzyme'
import AbilityProvider from '../AbilityProvider'  
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

describe("render", () => {
  test('should create a provider context with the correct permissions', () => {
    let element = shallow(
      <AbilityProvider roles={['ADMIN']} definition={definition}>
        <div></div>
      </AbilityProvider>
      )
      expect(element.props().value['BUTTON_VIEW']).toBe(true)
    })
})