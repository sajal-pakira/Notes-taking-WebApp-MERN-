import express from "express";
import notesRoutes from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on PORT 5001");
});

//
