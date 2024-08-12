import Sequelize from "sequelize";

import connection from "../connection";

import { UserModelStatic } from "../../types/models/index";

const UserDefinition = <UserModelStatic>connection.define("user", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },

  username: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  },

  email: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  },

  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  sessionId: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  userType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [
        [ "guest", "unconfirmed", "standard", "admin" ]
      ]
    },
  }
});

export default UserDefinition;
