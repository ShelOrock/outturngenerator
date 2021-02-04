import {
  UUID,
  UUIDV4,
  STRING,
  TEXT,
  BLOB,
} from 'sequelize';

import db from '../database';

import { OutturnModelStatic } from '../../types/models/index';

const Outturn = <OutturnModelStatic>db.define('outturn', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
  },

  name: {
    type: STRING,
    allowNull: false,
  },

  description: {
    type: TEXT,
  },
  
  image: {
    type: BLOB,
  }

})

export default Outturn;