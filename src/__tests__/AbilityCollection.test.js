import AbilityCollection from '../AbilityCollection' 

const definition = {
	permissions: [
		{
			name: 'VIEW_BUTTON',
			roles: ['ADMIN', 'USER']
		},
		{
			name: 'EDIT_BUTTON',
			roles: ['USER']
		}
	]
}

describe('collect', () => {
	test('collect should assign the correct abilities', () => {
		let collection = new AbilityCollection(definition, ['ADMIN']) 
		expect(Object.keys(collection.abilities).length).toBe(1)
	})
})