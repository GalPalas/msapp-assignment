import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import startup from "./start/routes.js";
dotenv.config();

const app = express();

app.use(cors());

startup(app);

const port = process.env.PORT || 6001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
