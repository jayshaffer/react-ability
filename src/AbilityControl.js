import { Component, PropTypes, Children } from "react"
import PropTypes from "prop-types"
import { Consumer } from './AbilityContext'
import { able } from 'able'

class AbilityControl extends React.Component{

  renderChildren(abilityContext){
    if(able(this.props.ability, this.props.namespace)){
      {Children.only(this.props.children)}
    }
    else{
      return null
    }
  }

  render(){
    return (
      <Consumer>
        {abilityContext => (
            return this.renderChildren(abilityContext)
        )}
      }
      </Consumer>
    )
  }
}

AbilityControl.defaultProps = {
  children: []
}

AbilityControl.propTypes = {
  children: PropTypes.node,
  namespace: PropTypes.string,
  ability: PropTypes.string.isRequired
}

export default AbilityControl
