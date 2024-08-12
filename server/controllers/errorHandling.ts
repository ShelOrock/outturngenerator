import { Request, Response, NextFunction } from "express";

const handleAPIRouteNotFound = (_req_: Request, res: Response, next: NextFunction) => {
  const err = new Error("API route not found");
  res.status(404);
  next(err);
};

export { handleAPIRouteNotFound };
