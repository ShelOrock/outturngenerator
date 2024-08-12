import bcrypt from "bcrypt"

const SALT_ROUNDS = 12;

const USERS = [
  {
    username: "Shel",
    email: "shel@gmail.com",
    password: bcrypt.hashSync("1234", SALT_ROUNDS),
    sessionId: "0",
    userType: "admin" as "admin",
  },
];

export default USERS;
