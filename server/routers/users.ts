import express, { Router } from "express";

import { usersControllers, errorHandlingControllers } from "../controllers";

const router: Router = express.Router();

router.get("/", usersControllers.getAllUsers);
router.get("/:id", usersControllers.getUser);
router.put("/:id", usersControllers.updateUser);
router.delete("/:id", usersControllers.deleteUser);

router.use(errorHandlingControllers.handleAPIRouteNotFound);

export default router;
