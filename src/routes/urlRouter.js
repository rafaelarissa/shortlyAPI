import { Router } from "express";
import { setShortUrl } from "../controllers/urlController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const urlRouter = Router();
urlRouter.post('/urls/shorten', validateTokenMiddleware, setShortUrl);
export default urlRouter;