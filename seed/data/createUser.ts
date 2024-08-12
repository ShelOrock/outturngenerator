import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

import { UserAttributes } from "../../server/types/models";

import { USER_TYPES } from "../staticData";

import * as utilities from "./utilities";

const SALT_ROUNDS = 12;

const createUser = (): UserAttributes => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync(faker.internet.password(), SALT_ROUNDS),
    userType: utilities.selectRandomArrayItem(USER_TYPES)
  }
};

export default createUser
