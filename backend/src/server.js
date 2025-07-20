import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.middleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
// console.log(process.env.MONGO_URI);

//Middleware
app.use(express.json()); // it parse json
app.use(rateLimiter);
app.use(cors());

//custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server is running on PORT : ", port);
  });
});
