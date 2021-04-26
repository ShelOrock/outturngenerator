import { 
  Model,
  BuildOptions,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyAddAssociationsMixinOptions
} from 'sequelize';

import { OutturnModel } from './index';

export interface UserAttributes {
  readonly id?: string;
  email?: string;
  username?: string;
  password?: string;
  sessionId?: string;
  loggedIn?: 'Online' | 'Offline';
  userType?: 'Guest' | 'Unconfirmed' | 'Standard' | 'Admin';

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
};

export interface UserModel extends Model<UserAttributes>, UserAttributes {
  getOutturns: BelongsToManyGetAssociationsMixin<OutturnModel>;
  setOutturns: BelongsToManySetAssociationsMixin<OutturnModel, OutturnModel['id']>;
  hasOutturn: BelongsToManyHasAssociationMixin<OutturnModel, OutturnModel['id']>;
  hasOutturns: BelongsToManyHasAssociationMixin<OutturnModel, OutturnModel['id']>;
  addOutturn: BelongsToManyAddAssociationMixin<OutturnModel, OutturnModel['id']>;
  addOutturns: BelongsToManyAddAssociationMixin<OutturnModel[], OutturnModel['id'][]>;
  createOutturn: BelongsToManyCreateAssociationMixin<OutturnModel>;
  removeOutturn: BelongsToManyRemoveAssociationMixin<OutturnModel, OutturnModel['id']>;
  removeOutturns: BelongsToManyRemoveAssociationMixin<OutturnModel, OutturnModel['id']>;
  countOutturns: BelongsToManyCountAssociationsMixin;
};

export type UserModelStatic = typeof Model & {
  new(
    values?: object,
    options?: BuildOptions | BelongsToManyAddAssociationsMixinOptions,
  ): UserModel,
};