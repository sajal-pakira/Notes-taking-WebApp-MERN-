import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.send(`<h1>sajal</h1>`);
});

app.listen(5001, () => {
  console.log("Server is running on PORT 5001");
});
