// @flow

import type { Node } from 'react'
import { Component, PropTypes, Children } from 'react'
import context from './AbilityContext'
import React from 'react'
import able from './able'

type Props = {
  children?: Node,
  type: string,
  name: string,
  abilities: Array<string>
}

class AbilityControl extends Component<Props>{
  name: string 
  children: Node
  abilities: Array<String>
  type: string

  renderChildren(abilities: any){
  	if(able(this.props.name, this.props.type, abilities)){
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
