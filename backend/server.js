import express from "express";
import notesRoutes from "./routes/notes.routes";
const app = express();

app.use("/api/notes", notesRoutes);
app.get("/api/notes", (req, res) => {
  res.send(`<h1>sajal</h1>`);
});

app.listen(5001, () => {
  console.log("Server is running on PORT 5001");
});
