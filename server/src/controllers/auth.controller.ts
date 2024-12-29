import { db } from "../config/db";
import { hashPassword, comparePassword, generateToken } from "../lib/utils";

export const register = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const user = await db.user.create({
      data: {
        name,
        email,
        password: await hashPassword(password),
      },
    });
    const token = generateToken({ id: user.id, email: user.email });
    return res
      .status(201)
      .json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: String(error) || "Internal server error" });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateToken({ id: user.id, email: user.email });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: String(error) || "Internal server error" });
  }
};
