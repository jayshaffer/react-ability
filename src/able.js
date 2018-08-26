// @flow

export default function able(name: string, type: string, abilities: any): boolean{
	return abilities != null && abilities[`${type}_${name}`] == true 
}