// @flow

export default function able(abilities: any, permission: string, type: string): boolean{
	return abilities != null && abilities[`${type}_${permission}`] == true 
}