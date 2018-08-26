/*jshint esversion: 6 */
import AbilityCollection from '../AbilityCollection';
var definition = {
  rules: [{
    type: 'BUTTON',
    abilities: [{
      name: 'VIEW',
      roles: ['ADMIN', 'USER']
    }]
  }, {
    type: 'COURSE',
    abilities: [{
      name: 'EDIT',
      roles: ['USER']
    }]
  }]
};

describe("collect", function () {
  test('collect should assign the correct abilities', function () {
    var collection = new AbilityCollection(definition, ['ADMIN']);
    expect(collection.abilities.length).toBe(1);
  });
});