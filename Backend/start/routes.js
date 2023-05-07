import express from "express";
import images from "../routes/images.js";

const startup = (app) => {
  app.use(express.json());
  app.use("/api/images", images);
};

export default startup;
