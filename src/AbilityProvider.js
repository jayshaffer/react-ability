import { Component, PropTypes, Children } from "react"
import PropTypes from "prop-types"

class AbilityProvider extends React.Component(){
    static propTypes = {
      abilities: PropTypes.array.isRequired,
      children: PropTypes.node
    }
    static childContextTypes = {
      abilities: PropTypes.array.isRequired
    }
    getChildContext() {
      const { abilities } = this.props
      return { abilities }
    }
    render() {
      return Children.only(this.props.children)
    }
}
