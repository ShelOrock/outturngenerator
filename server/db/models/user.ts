import {
  UUID,
  UUIDV4,
  STRING,
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
    allowNull: true,
  },

  loggedIn: {
    type: STRING,
    validate: {
      isIn: [
        ['Online', 'Offline']
      ]
    },
    defaultValue: 'Offline',
  },

  userType: {
    type: STRING,
    validate: {
      isIn: [
        ['Guest', 'Unconfirmed', 'Standard', 'Admin']
      ]
    },
    defaultValue: 'Guest'
  }
}, {
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
  scopes: {
    withPassword: {
      attributes: { exclude: [] }
    }
  },
});

export default User;