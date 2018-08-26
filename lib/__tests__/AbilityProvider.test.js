var _this = this;

import { mount } from 'enzyme';
import AbilityProvider from '../AbilityProvider';
import React from 'react';

var definition = {
  rules: [{
    type: 'BUTTON',
    abilities: [{
      name: 'VIEW',
      roles: ['ADMIN', 'USER']
    }]
  }]
};

describe("render", function () {
  test('should create a provider context with the correct permissions', function () {
    var element = mount(React.createElement(
      AbilityProvider,
      { roles: ['ADMIN'], definition: definition },
      React.createElement(
        'div',
        null,
        function () {
          expect(_this.props.abilities).toBe({});
        }
      )
    ));
  });
});