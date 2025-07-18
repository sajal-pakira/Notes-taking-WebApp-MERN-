import express from "express";
import notesRoutes from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middlewares/rateLimiter.middleware.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
// console.log(process.env.MONGO_URI);

connectDB();

//Middleware
app.use(express.json()); // it parse json
app.use(rateLimiter);
//custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & req url is ${req.url}`);
//   next();
// });
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("Server is running on PORT : ", port);
});
