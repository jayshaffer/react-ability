export default function able(abilities, permission, type) {
	return abilities != null && abilities[type + '_' + permission] == true
}