import * as configVariables from "../config";

import session from "express-session";

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;

const sessionConfig = session({
  secret: configVariables.sessionSecret,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: COOKIE_MAX_AGE
  }
});

export default sessionConfig;
