import able from '../able'

describe("hasAbility", () => {
  test('hasAbility with role should apply role abilities', () => {
    expect(able({role: 'foo', abilities: {button: 'CAN_VIEW'}}, 'CAN_VIEW', 'button')).toBeTruthy()
  })
})

{
  currentRoles: [],
  components: [
    {
      button: {
        abilities: [
          'VIEW': {
            roles: ['ADMIN', 'USER']
          }
        ]
      }
    }
  ]
}
