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
  permissions: [
    {
        name: 'VIEW_BUTTON',
        roles: ['ADMIN', 'USER']
    },
    {
        name: 'EDIT_COURSE',
        roles: ['USER']
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
    <AbilityProvider roles={roles} definition={definition}>
        <AbilityControl permission="VIEW_BLOGPOST">
            <div>"You can see me!"</div>
        </AbilityControl> 
        <AbilityControl permission="CREATE_BLOGPOST">
            <div>"Can't see me!"</div>
        </AbilityControl>
    </AbilityProvider>
    ...
```

You can also check abilities in any child components of the AbilityProvider.

```javascript
    import ableTo from 'react-ability'
    const ableToView = ableTo('VIEW_BLOGPOST', this.props.abilities) 
```

## Limitations

This library DOES NOT replace or fill the need for a backend authorization service.

The domain of react-ability is primarily visibility and role checking. This doesn't prevent your users from modifying the JS and monkeying around with front end permissions.

Make sure you have a solid permission system on the backend that does the auth heavy lifting, and doesn't rely on this library for your application's primary authorization. 
## License

MIT