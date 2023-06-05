import "reflect-metadata";
import "express-async-errors";
import { HandleError } from "./errors";
import express from "express";
import swaggerUI from "swagger-ui-express";
import userRouter from "./routes/users.router";
import swaggerDocument from "../swagger.json";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(userRouter);
app.use(HandleError);

export default app;
