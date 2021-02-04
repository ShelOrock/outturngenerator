import {
  UUID,
  UUIDV4,
  STRING,
  BOOLEAN
} from 'sequelize';

import db from '../database';

import { UserModelStatic } from '../../types/models/index';

const User = <UserModelStatic>db.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },

  username: {
    type: STRING,
    allowNull: true,
    unique: true
  },

  email: {
    type: STRING,
    allowNull: true,
    unique: true
  },

  password: {
    type: STRING,
    allowNull: true,
  },

  sessionId: {
    type: STRING,
    allowNull: false,
  },

  loggedIn: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  userType: {
    type: STRING,
    validate: {
      isIn: [
        ['guest', 'standard', 'admin']
      ]
    },
    defaultValue: 'guest'
  }
});

export default User;