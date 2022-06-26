import express from "express";
import cors from "cors";
import { getLecturers } from "./db";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/lecturers", (req, res) => {
  const lecturers = getLecturers();
  res.send(lecturers);
});

app.listen(PORT, () => {
  console.log(`SERVER RUN ON PORT ${PORT}`);
});
