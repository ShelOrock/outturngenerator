import bcrypt from 'bcrypt';

import { UserAttributes } from '../../server/types/models/index';

const SALTROUNDS = 12;

export const users: UserAttributes[] = [
  {
    username: 'Shel',
    email: 'shel@gmail.com',
    password: bcrypt.hashSync('1234', SALTROUNDS),
    sessionId: '0',
    loggedIn: false,
    userType: 'admin',
  },

  {
    username: 'Spongebob',
    email: 'spongebob@gmail.com',
    password: bcrypt.hashSync('1234', SALTROUNDS),
    sessionId: '1',
    loggedIn: false,
    userType: 'admin',
  },

  {
    username: 'Patrick',
    email: 'patrick@gmail.com',
    password: bcrypt.hashSync('1234', SALTROUNDS),
    sessionId: '2',
    loggedIn: false,
    userType: 'standard',
  },

  {
    username: 'Squidward',
    email: 'squidward@gmail.com',
    password: bcrypt.hashSync('1234', SALTROUNDS),
    sessionId: '3',
    loggedIn: false,
    userType: 'standard',
  },

  {
    username: 'Sandy',
    email: 'sandy@gmail.com',
    password: bcrypt.hashSync('1234', SALTROUNDS),
    sessionId: '4',
    loggedIn: false,
    userType: 'standard',
  }
];

export default users;