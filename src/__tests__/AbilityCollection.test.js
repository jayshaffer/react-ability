import AbilityCollection from '../AbilityCollection' 

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
		},
		{
			type: 'COURSE',
			abilities: [
				{
					name: 'EDIT',
					roles: ['USER']
				}
			]
		}
	]
}

describe('collect', () => {
	test('collect should assign the correct abilities', () => {
		let collection = new AbilityCollection(definition, ['ADMIN']) 
		expect(Object.keys(collection.abilities).length).toBe(1)
	})
})