import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/project.controller";
import { validate } from "../middlewares/validate.middleware";
import { createProjectSchema } from "../schemas/project.schema";
import { Router } from "express";

const router = Router();

router.post("/", validate(createProjectSchema), createProject);
router.get("/", getProjects);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
