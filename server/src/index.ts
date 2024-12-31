import express from "express";
import authRoutes from "./routes/auth.route";
import projectRoutes from "./routes/project.route";
import cors from "cors";
import morgan from "morgan";
import { auth } from "./middlewares/auth.middleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/auth", authRoutes);
app.use("/api/projects", auth, projectRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
