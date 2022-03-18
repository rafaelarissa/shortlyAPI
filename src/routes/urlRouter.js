import { Router } from "express";
import { deleteUrl, setShortUrl } from "../controllers/urlController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const urlRouter = Router();
urlRouter.post('/urls/shorten', validateTokenMiddleware, setShortUrl);
urlRouter.get('/urls/:shortUrl', getUrl);
urlRouter.delete('/urls/:id', validateTokenMiddleware, deleteUrl);
export default urlRouter;