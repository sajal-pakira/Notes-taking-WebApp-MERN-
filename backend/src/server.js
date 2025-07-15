import express from "express";
import notesRoutes from "./routes/notes.route.js";
const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on PORT 5001");
});


// mongodb+srv://uniquesajal6:Sajal26@cluster0.zxd9uyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0