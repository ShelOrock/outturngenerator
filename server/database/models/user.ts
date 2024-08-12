import * as Definitions from "../modelDefinitions";

Definitions.UserDefinition.belongsToMany(
  Definitions.OutturnDefinition, 
  { through: "outturns_users" }
);

Definitions.UserDefinition.addScope(
  "defaultScope",
  { attributes: { exclude: ["password"] } }
);

Definitions.UserDefinition.addScope(
  "withPassword",
  { attributes: { exclude: [] } }
);

export default Definitions.UserDefinition;
