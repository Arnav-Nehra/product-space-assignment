import express from "express";
import userRouter from "./user.js"
import accountRouter from "./account.js" 

const app = express();
const router = express.Router();

router.use("/auth/user",userRouter);

router.use("/accountRouter",accountRouter);
export default router;