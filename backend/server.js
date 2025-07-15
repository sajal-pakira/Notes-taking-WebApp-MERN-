import express from "express";
import notesRoutes from "./routes/notes.routes.js";
const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on PORT 5001");
});
