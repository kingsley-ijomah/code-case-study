require("express-async-errors");
require("dotenv").config();

const express = require("express");
const app = express();
const todoRouter = require("./routes/todoRoutes");

//To access req.body
app.use(express.json());

//Route
app.use("/todos", todoRouter);

app.get("/", async (req, res) => {
  res.send(`Todo CRUD API`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
