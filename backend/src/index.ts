import express from "express";
import mainRouter from "./routes/index.js"
const app = express();

app.use(express.json());
app.use("/api",mainRouter);

app.listen(3000,()=>{
    "app listening on port 3000"
})