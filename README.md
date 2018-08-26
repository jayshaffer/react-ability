React Ability
=========================

React role based permissions based on the [RBAC Spec](https://en.wikipedia.org/wiki/Role-based_access_control)

[![Build Status](https://travis-ci.org/jayshaffer/react-ability.svg?branch=master)](https://travis-ci.org/jayshaffer/react-ability)

## Purpose

Most backends are packaged with some sort of permission engine to lock resources.
react-ability takes the ideas from [some](https://github.com/CanCanCommunity/cancancan) of those [popular](https://shiro.apache.org/) libraries and does the same for React.

## Installation

To install the latest release

```
npm install --save react-ability
```

or 

```
yarn add react-ability
```
## Usage

Create a definition object.

```javascript
const definition = {
  rules: [
      {
          type: 'BLOGPOST',
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

```

Pass that definition to an ability provider, along with any roles the
current user has.  The roles should be dynamic and be provisioned
through some sort of controlling authorization service API.

```javascript
    import React from 'react'
    import AbilityProvider from 'react-ability'
    const roles = ['ADMIN']
    <AbilityProvider roles={roles} definition={definition}>
        ...
    </AbilityProvider>
```

Then in any children you can control how you want components to be rendered.

```javascript
    import React from 'react'
    import AbilityControl from 'react-ability'
    ...
    <div>
        <AbilityControl name="VIEW" type="BLOGPOST">
            <div>You can see me!</div>
        </AbilityControl> 
        <AbilityControl name="CREATE" type="BLOGPOST">
            <div>Can\'t see me!</div>
        </AbilityControl>
    </div>
    ...
```

You can also check abilities in any child components of the AbilityProvider.

```javascript
    import able from 'react-ability'
    const ableToView = able('VIEW', 'BUTTON', this.props.abilities) 
```

## License

MIT