import { verifyToken } from "../lib/utils";
import { NextFunction, Response } from "express";

export const auth = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        message: "Unauthorized",
      });
      return;
    }
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    return;
  }
};
