import {
  UUID,
  UUIDV4,
  STRING,
  INTEGER,
  TEXT,
  BLOB
} from 'sequelize'

import db from '../database';

import { CaskModelStatic } from '../../types/models/index';

const Cask = <CaskModelStatic>db.define('cask', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },

  caskPosition: {
    type: INTEGER,
  },

  caskNumber: {
    type: STRING,
  },

  name: {
    type: STRING,
  },

  price: {
    type: STRING,
  },

  flavourProfile: {
    type: STRING,
  },

  age: {
    type: INTEGER,
    allowNull: true,
  },

  date: {
    type: STRING,
    allowNull: true,
  },

  region: {
    type: STRING,
  },

  caskType: {
    type: STRING,
  },

  abv: {
    type: STRING,
  },

  bottleOutturn: {
    type: INTEGER,
  },

  allocation: {
    type: INTEGER,
  },

  description: {
    type: TEXT,
  },
})

export default Cask;