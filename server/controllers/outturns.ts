import { Request, Response, NextFunction } from "express";

import { databaseServices } from "../services";

import { Models } from "../database";

const getAllOutturns = async (_req_: Request, res: Response, next: NextFunction) => {
  try {
    const outturns = await databaseServices.getAllRecords(Models.Outturn, { scope: "withCasks" });

    if(!outturns) {
      const err = new Error("Outturns not found");
      next(err);

    } else {

      res.status(200).send(outturns);
    }

  } catch(e) {
    next(e);
  };
};

const getOutturn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const outturn = databaseServices.getRecord(Models.Outturn, { id: req.params.outturnId });

    if(!outturn) {
      const err = new Error("Outturn not found");
      next(err);

    } else {
      res.status(200).send(outturn);
    };

  } catch(e) {
    next(e);
  };
};

const createOutturn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await databaseServices.createRecord(Models.Outturn, req.body);
    res.status(201).send("Outturn created successfully");

  } catch(e) {
    next(e);
  };
};

const updateOutturn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await databaseServices.updateRecord(Models.Outturn, req.body, { searchCondition: { id: req.params.outturnId } });
    res.status(201).send("Outturn updated successfully");

  } catch(e) {
    next(e)
  };
};

const deleteOutturn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const casksToRemove = await databaseServices.getAllRecords(Models.Cask, { searchCondition: { outturnId: req.params.id } });
    await casksToRemove.forEach(async cask => {
      await databaseServices.updateRecord(Models.Cask, { outturnId: null }, { searchCondition: { id: cask.id } });
    });
    await databaseServices.deleteRecord(Models.Outturn, { searchCondition: { id: req.params.id } });
    res.status(204).send("Outturn deleted successfully");

  } catch(e) {
    throw new Error(e);
  };
};

export {
  getAllOutturns,
  getOutturn,
  createOutturn,
  updateOutturn,
  deleteOutturn
};
