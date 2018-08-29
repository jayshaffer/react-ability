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

  appendAbility(permission: string){
  	this.abilities[permission] = true 
  }
    
  collect(){
  	for(var i = 0; i < this.definition.permissions.length; i++){
  		let permission = this.definition.permissions[i]
		let roles = permission.roles
		for(var k = 0; k < roles.length; k++){
			if(this.roleHash[roles[k]]){
				this.appendAbility(permission.name)
				break
			}
		}
  	}
  }
}