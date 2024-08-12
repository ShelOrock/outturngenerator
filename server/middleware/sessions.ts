import { Request, Response, NextFunction } from "express";

import { databaseServices } from "../services";

import { Models } from "../database";

const getSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await databaseServices.getRecord(Models.User, { sessionId: req.sessionID });

    if(!user) {
      const newUser = await databaseServices.createRecord(Models.User, {
        sessionId: req.sessionID,
        userType: "guest"
      });
      res.cookie("sessionId", newUser.sessionId);
      next();

    } else {
      res.cookie("sessionId", user.sessionId);
      next();
    };

  } catch(e) {
    next(e);
  };
};

export { getSession };
