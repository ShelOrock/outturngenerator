import {
  UUID,
  UUIDV4,
  STRING,
  INTEGER,
  TEXT,
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
    allowNull: true,
    defaultValue: null
  },

  caskNumber: {
    type: STRING,
  },

  name: {
    type: STRING,
  },

  price: {
    type: STRING,
    defaultValue: ''
  },

  flavourProfile: {
    type: STRING,
    defaultValue: ''
  },

  age: {
    type: STRING,
    allowNull: true,
    defaultValue: ''
  },

  date: {
    type: STRING,
    allowNull: true,
    defaultValue: ''
  },

  region: {
    type: STRING,
    defaultValue: ''
  },

  caskType: {
    type: STRING,
    defaultValue: ''
  },

  abv: {
    type: STRING,
    defaultValue: ''
  },

  bottleOutturn: {
    type: STRING,
    defaultValue: ''
  },

  allocation: {
    type: STRING,
    defaultValue: ''
  },

  description: {
    type: TEXT,
    defaultValue: ''
  },
})

export default Cask;