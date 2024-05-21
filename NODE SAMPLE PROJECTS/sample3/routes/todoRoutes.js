const express = require("express");
const {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getSingleTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
