import express from "express";
import notesRoutes from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// console.log(process.env.MONGO_URI);
const port = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("Server is running on PORT : ", port);
});

//
