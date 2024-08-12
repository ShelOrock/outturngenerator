import express, { Router } from "express";

import { casksControllers, errorHandlingControllers } from "../controllers";

const router: Router = express.Router();

router.get("/", casksControllers.getAllCasks);
router.get("/:id", casksControllers.getCask);
router.post("/", casksControllers.createCask);
router.put("/:id", casksControllers.updateCask);
router.delete("/:id", casksControllers.deleteCask);

router.use(errorHandlingControllers.handleAPIRouteNotFound);

export default router;
