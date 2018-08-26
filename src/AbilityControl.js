// @flow

import type { Node } from "react"
import { Component, PropTypes, Children } from "react"
import context from './AbilityContext'
import React from 'react'
import able from './able'

type Props = {
  children?: Node,
  type: string,
  permission: string,
  abilities: Array<string>
}

class AbilityControl extends Component<Props>{
  permission: string 
  children: Node
  abilities: Array<String>
  type: string

  renderChildren(abilities: any){
    if(able(abilities, this.props.permission, this.props.type)){
      return Children.only(this.props.children)
    }
    else{
      return null
    }
  }

  render(){
    return (
      <context.Consumer>
          {(abilitiesContext) => (
              this.renderChildren(abilitiesContext)
          )}
      </context.Consumer>
    )
  }
}

export default AbilityControl
