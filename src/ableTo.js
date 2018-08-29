// @flow

export default function ableTo(permission: string, abilities: any): boolean{
	return abilities != null && abilities[permission] == true 
}

export { ableTo }