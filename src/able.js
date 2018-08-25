import { Consumer } from './AbilityContext'
import React from 'react'

const able = (config, ability, namespace) => {
  let node = null
  if(config.role && namespace && abilityContext.abilities.hasOwnProperty(namespace)){
    console.log(abilityContext.abilities)
    const abilities = abilityContext.abilities[abilityContext.role][namespace]
    node = abilities[namespace]
  }
  if(!node){
    node = abilityContext.abilities
  }
  return node.includes(ability)
}

export default able
