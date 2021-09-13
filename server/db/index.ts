import db from './database';

import {
  Cask,
  Outturn,
  User,
} from './models/index';

Outturn.hasMany(Cask);
Cask.belongsTo(Outturn);

User.belongsToMany(Outturn, { through: 'outturn_user' });
Outturn.belongsToMany(User, { through: 'outturn_user' });

export {
  db,
  Cask,
  Outturn,
  User,
};