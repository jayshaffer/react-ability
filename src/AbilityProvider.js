// @flow

import { Component, PropTypes, Children } from "react"
import context from './AbilityContext'
import AbilityCollection from './AbilityCollection'
import type { Node } from 'react'
import React from 'react'

type Props = {
  roles: Array<string>,
  definition: any,
  children?: Node
}

class AbilityProvider extends Component<Props>{

    roles: Array<string>

    render() {
      const abilityCollection = new AbilityCollection(this.props.definition, this.props.roles)
      return (
        <context.Provider value={abilityCollection.abilities}>
          {Children.only(this.props.children)}
        </context.Provider>
      )
    }
}

export default AbilityProvider
