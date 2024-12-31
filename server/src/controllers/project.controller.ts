import { db } from "../config/db";

export const createProject = async (req: any, res: any) => {
  try {
    const { name, description } = req.body;
    const userId = req.user.id;
    const project = await db.project.create({
      data: {
        name,
        description: description ?? null,
        userId,
      },
    });
    return res.status(201).json({ message: "Project created", project });
  } catch (error) {
    res
      .status(500)
      .json({ message: (error as Error) || "Internal server error" });
  }
};

export const getProjects = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const projects = await db.project.findMany({
      where: {
        userId,
      },
    });
    return res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: error as Error });
  }
};

export const updateProject = async (req: any, res: any) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;
    const userId = req.user.id;
    const project = await db.project.update({
      where: {
        id,
        userId,
      },
      data: {
        name,
        description: description ?? null,
      },
    });
    return res.status(200).json({ message: "Project updated", project });
  } catch (error) {
    res.status(500).json({ message: error as Error });
  }
};

export const deleteProject = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    await db.project.delete({
      where: {
        id,
        userId,
      },
    });
    return res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error as Error });
  }
};
