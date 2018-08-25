import { Component, PropTypes, Children } from "react"
import PropTypes from "prop-types"
import { Provider } from './AbilityContext'

class AbilityProvider extends React.Component(){

    collectRoles(){
      for(var i = 0; i < this.components.length; i++){
        const component = this.components[i];
        for(var key in this.components[i]){
          component[key]
        }
      }
    }

    render() {
        return (
          <Provider value={{abilities: this.props.abilities, role: this.props.role}}>
            {Children.only(this.props.children)}
          </Provider>
        )
    }
}

Ability.defaultProps = {
  children: [],
  abilities: {}
}

AbilityProvider.propTypes = {
  children: PropTypes.node,
  role: PropTyoes.string,
  abilities: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
}

export default AbilityProvider
