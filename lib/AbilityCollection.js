function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbilityCollection = function () {
  function AbilityCollection(definition, roles) {
    _classCallCheck(this, AbilityCollection);

    this.abilities = [];
    this.roles = roles;
    this.roleHash = {};
    this.definition = definition;
    this.hashCurrentRoles();
    this.collect();
  }

  AbilityCollection.prototype.hashCurrentRoles = function hashCurrentRoles() {
    for (var i = 0; i < this.roles.length; i++) {
      this.roleHash[this.roles[i]] = true;
    }
  };

  AbilityCollection.prototype.appendAbility = function appendAbility(type, name) {
    var resolvedType = type ? type : '__default';
    this.abilities.push({ name: name, type: resolvedType });
  };

  AbilityCollection.prototype.collect = function collect() {
    for (var i = 0; i < this.definition.rules.length; i++) {
      var rule = this.definition.rules[i];
      var abilities = rule.abilities;
      for (var j = 0; j < abilities.length; j++) {
        var ability = abilities[j];
        var roles = ability.roles;
        for (var k = 0; k < roles.length; k++) {
          if (this.roleHash[roles[k]]) {
            this.appendAbility(rule.type, ability.name);
            break;
          }
        }
      }
    }
  };

  return AbilityCollection;
}();

export default AbilityCollection;