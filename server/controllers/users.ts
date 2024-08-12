import { Request, Response, NextFunction } from "express";

import { databaseServices } from "../services";

import { Models } from "../database";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await databaseServices.getAllRecords(Models.User);

    if(!users) {
      const err = new Error("Users not found");
      next(err);

    } else {
      res.status(200).send(users);
    };

  } catch(e) {
    next(e);
  };
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const user = await databaseServices.getRecord(Models.User, { sessionId: req.params.id });

    if(!user) {
      const err = new Error("User not found");
      next(err);

    } else {
      res.status(200).send(user);
    };

  } catch(e) {
    next(e)
  };
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await databaseServices.updateRecord(Models.User, req.body, { searchCondition: { id: req.params.userId } });

    res.status(201).send("User updated successfully");

  } catch(e) {
    next(e);
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await databaseServices.deleteRecord(Models.User, { searchCondition: { id: req.params.userId } });

    res.status(204).send("User successfully deleted");

  } catch(e) {
    next(e);
  };
};

export {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
}