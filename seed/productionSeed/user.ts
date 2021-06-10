import bcrypt from 'bcrypt';

import { UserAttributes } from '../../server/types/models'

const SALT_ROUNDS: number = 12;

export const users: UserAttributes[] = [
  {
    username: 'Shel',
    email: 'orockshel@gmail.com',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    userType: 'Admin',
    loggedIn: 'Offline',
  }
];