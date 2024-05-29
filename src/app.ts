import express from "express";
import userRoutes from "./api/route/ClassRoute";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

export default app;