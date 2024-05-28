import express from 'express';
import { IndexRouter } from "./routes"
import { errorMiddleware } from "./middlewares/error";

const app = express();
const helmet = require('helmet');
// helmet
app.use(helmet());
app.use(express.json());
app.use("/",IndexRouter);
app.use(errorMiddleware);

export default app;