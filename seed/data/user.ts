import bcrypt from 'bcrypt';

import { UserAttributes } from '../../server/types/models/index';

const SALT_ROUNDS = 12;

export const users: UserAttributes[] = [
  {
    username: 'Shel',
    email: 'shel@gmail.com',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    sessionId: '0',
    loggedIn: 'Offline',
    userType: 'Admin',
  },

  {
    username: 'Spongebob',
    email: 'spongebob@gmail.com',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    sessionId: '1',
    loggedIn: 'Offline',
    userType: 'Admin',
  },

  {
    username: 'Patrick',
    email: 'patrick@gmail.com',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    sessionId: '2',
    loggedIn: 'Offline',
    userType: 'Standard',
  },

  {
    username: 'Squidward',
    email: 'squidward@gmail.com',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    sessionId: '3',
    loggedIn: 'Online',
    userType: 'Standard',
  },

  {
    username: 'Sandy',
    email: 'sandy@gmail.com',
    password: bcrypt.hashSync('1234', SALT_ROUNDS),
    sessionId: '4',
    loggedIn: 'Offline',
    userType: 'Unconfirmed',
  }
];

export default users;