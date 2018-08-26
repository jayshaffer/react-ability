// @flow

export default class AbilityCollection {
  abilities: Object 
  roles: Array<string>
  roleHash: any
  definition: any

  constructor(definition: any, roles: Array<string>){
  	this.abilities = {} 
  	this.roles = roles
  	this.roleHash = {}
  	this.definition = definition
  	this.hashCurrentRoles()
  	this.collect()
  }

  hashCurrentRoles(){
  	for(var i = 0; i < this.roles.length; i++){
  		this.roleHash[this.roles[i]] = true
  	}
  }

  appendAbility(type: string, name: string){
  	this.abilities[`${type}_${name}`] = true 
  }
    
  collect(){
  	for(var i = 0; i < this.definition.rules.length; i++){
  		let rule = this.definition.rules[i]
  		let abilities = rule.abilities
  		for(var j = 0; j < abilities.length; j++){
  			let ability = abilities[j]
  			let roles = ability.roles
  			for(var k = 0; k < roles.length; k++){
  				if(this.roleHash[roles[k]]){
  					this.appendAbility(rule.type, ability.name)
  					break
  				}
  			}
  		}
  	}
  }
}