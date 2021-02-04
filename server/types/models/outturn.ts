import {
  Model,
  BuildOptions,

  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyAddAssociationMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyCountAssociationsMixin,

  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyAddAssociationsMixinOptions,
} from 'sequelize';

import { CaskModel, UserModel } from './index';

export interface OutturnAttributes {
  readonly id?: string;
  name: string;
  description?: string;
  image?: number[];
  
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
};

export interface OutturnModel extends Model<OutturnAttributes>, OutturnAttributes {
  getCasks: HasManyGetAssociationsMixin<CaskModel>;
  setCasks: HasManySetAssociationsMixin<CaskModel, UserModel['id']>;
  hasCask: HasManyHasAssociationMixin<CaskModel, UserModel['id']>;
  hasCasks: HasManyHasAssociationMixin<CaskModel, UserModel['id']>;
  addCask: HasManyAddAssociationMixin<CaskModel, UserModel['id']>;
  addCasks: HasManyAddAssociationMixin<CaskModel, UserModel['id']>;
  createCask: HasManyCreateAssociationMixin<CaskModel>;
  removeCask: HasManyRemoveAssociationMixin<CaskModel, UserModel['id']>;
  removeCasks: HasManyRemoveAssociationMixin<CaskModel, UserModel['id']>;
  countCasks: HasManyCountAssociationsMixin;

  getUsers: BelongsToManyGetAssociationsMixin<UserModel>;
  setUsers: BelongsToManySetAssociationsMixin<UserModel, UserModel['id']>;
  hasUser: BelongsToManyHasAssociationMixin<UserModel, UserModel['id']>;
  hasUsers: BelongsToManyHasAssociationMixin<UserModel, UserModel['id']>;
  addUser: BelongsToManyAddAssociationMixin<UserModel, UserModel['id']>;
  addUsers: BelongsToManyAddAssociationMixin<UserModel[], UserModel['id'][]>;
  createUser: BelongsToManyCreateAssociationMixin<UserModel>;
  removeUser: BelongsToManyRemoveAssociationMixin<UserModel, UserModel['id']>;
  removeUsers: BelongsToManyRemoveAssociationMixin<UserModel, UserModel['id']>;
  countUsers: BelongsToManyCountAssociationsMixin;
};

export type OutturnModelStatic = typeof Model & {
  new(
    values?: object,
    options?: BuildOptions | BelongsToManyAddAssociationsMixinOptions,
  ): OutturnModel,
};