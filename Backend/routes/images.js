import express from "express";
import "express-async-errors";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const apiUrl = `${process.env.BASE_URL}/?key=${process.env.PIXABAY_API_KEY}&q=animals&page=1&per_page=9`;
    const { data } = await axios.get(apiUrl);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

export default router;
