import { Model, BuildOptions } from 'sequelize';

export interface CaskAttributes {
  readonly id?: string,
  caskPosition?: number;
  caskNumber?: string;
  name?: string;
  price?: string;
  flavourProfile?: string;
  age?: string | null;
  date?: string;
  region?: string;
  caskType?: string;
  abv?: string;
  bottleOutturn?: string | null;
  allocation?: string | null;
  description?: string;
  outturnId?: string | number;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
};

export interface CaskModel extends Model<CaskAttributes>, CaskAttributes {};

export type CaskModelStatic = typeof Model & {
  new(
    values?: object,
    options?: BuildOptions,
  ): CaskModel
};
