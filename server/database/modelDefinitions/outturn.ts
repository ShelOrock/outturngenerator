import Sequelize from "sequelize";

import connection from "../connection";

import { OutturnModelStatic } from "../../types/models/index";

const OutturnDefinition = <OutturnModelStatic>connection.define("outturn", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT,
  },
  
  image: {
    type: Sequelize.BLOB,
  }

})

export default OutturnDefinition;
