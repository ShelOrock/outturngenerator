import express, { Router } from "express";

import { outturnsControllers, errorHandlingControllers } from "../controllers";

const router: Router = express.Router();

router.get("/", outturnsControllers.getAllOutturns);
router.get("/:id", outturnsControllers.getOutturn);
router.post("/", outturnsControllers.createOutturn);
router.put("/:id", outturnsControllers.updateOutturn);
router.delete("/:id", outturnsControllers.deleteOutturn);

router.use(errorHandlingControllers.handleAPIRouteNotFound);

export default router;
