import
  express, {
    Request,
    Response,
    NextFunction,
    Application
} from "express";

import sessionsConfig from "./sessionsConfig";
import { sessionsMiddleware } from "./middleware";

import path from "path";
import cookieParser from "cookie-parser";

import apiRouter from "./routers";

import HttpError from "./types/express";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(sessionsConfig);
app.use("/", sessionsMiddleware.getSession);

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use("/", (err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "Internal server error" })
});

export default app;
