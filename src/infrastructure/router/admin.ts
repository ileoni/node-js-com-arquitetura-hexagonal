import { Router } from "express";

import UserController from "../controller/UsersController";

const router = Router();

router.post("/add", new UserController().add);
router.get("/all", new UserController().all);
router.get("/find-by-email", new UserController().findByEmail);

export default router;