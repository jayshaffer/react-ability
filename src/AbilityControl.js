// @flow

import type { Node } from 'react'
import { Component, PropTypes, Children } from 'react'
import context from './AbilityContext'
import React from 'react'
import ableTo from './ableTo'

type Props = {
  children?: Node,
  permission: string,
  abilities: Array<string>
}

class AbilityControl extends Component<Props>{
  permisison: string 
  children: Node
  abilities: Array<String>

  renderChildren(abilities: any){
  	if(ableTo(this.props.permission, abilities)){
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
