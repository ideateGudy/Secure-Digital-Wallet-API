import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => res.status(200).send("Hello App"));

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
