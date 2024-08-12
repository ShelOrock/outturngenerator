import express, { Router } from "express";

import casksRouter from "./casks";
import outturnsRouter from "./outturns";
import usersRouter from "./users";

import { errorHandlingControllers } from "../controllers";

const router: Router = express.Router();

router.use("/casks", casksRouter);
router.use("/outturns", outturnsRouter);
router.use("/users", usersRouter);

router.use(errorHandlingControllers.handleAPIRouteNotFound);

export default router;
