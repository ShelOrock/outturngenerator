import * as Definitions from "../modelDefinitions";

Definitions.OutturnDefinition.hasMany(Definitions.CaskDefinition);

Definitions.OutturnDefinition.belongsToMany(
  Definitions.UserDefinition,
  { through: "outturns_users" }
);

Definitions.OutturnDefinition.addScope("withCasks", {
  include: [ Definitions.CaskDefinition ]
});

export default Definitions.OutturnDefinition;
