import { Router } from "express";
import { ClassController } from "../controller";

const router = Router();

router.patch("/classes/load", ClassController.getAllUsers);

export default router;