import { Request, Response, NextFunction } from "express";

import { databaseServices } from "../services";

import { Models } from "../database";

const getAllCasks = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const casks = await databaseServices.getAllRecords(Models.Cask);

    if(!casks) {
      const err = new Error("Casks not found");
      next(err);

    } else {
      res.status(200).send(casks);
    };

  } catch(e) {
    next(e);
  };
};

const getCask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cask = await databaseServices.getRecord(Models.Cask, { id: req.params.caskId });

    if(!cask) {
      const err = new Error("Cask not found");
      next(err);

    } else {
      res.status(200).send(cask);
    };

  } catch(e) {
    next(e);
  };
};

const createCask = async (req: Request, res: Response, next: NextFunction) => {

  try {
   const { id } = await databaseServices.createRecord(Models.Cask, req.body);
    res.status(201).send({
      id,
      message: "Cask created successfully!"
    });

  } catch(e) {
    next(e);
  };
};

const updateCask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await databaseServices.updateRecord(Models.Cask, req.body, { searchCondition: { id: req.params.caskId } });
    res.status(201).send("Cask updated successfully");

  } catch(e) {
    next(e);
  };
};

const deleteCask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await databaseServices.deleteRecord(Models.Cask, { searchCondition: { id: req.params.id } });
    res.status(204).send({ message: "Cask deleted successfully" });

  } catch(e) {
    throw new Error(e);
  };
};

export {
  getAllCasks,
  getCask,
  createCask,
  updateCask,
  deleteCask
};
