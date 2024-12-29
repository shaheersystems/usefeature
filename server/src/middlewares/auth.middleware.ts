import { verifyToken } from "../lib/utils";
import { NextFunction, Response } from "express";

export const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const payload = verifyToken(token);
    req.user = payload;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
