const Pool = require("../db/db");
const { StatusCodes } = require("http-status-codes");

const createTodo = async (req, res) => {
  const { description } = req.body;

  //Use RETURNING * to get the values - For creating and updating use this
  const todo = await Pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description]
  );
  res.status(StatusCodes.CREATED).json(todo.rows[0]);
};

const getAllTodos = async (req, res) => {
  const todos = await Pool.query("SELECT * FROM todo");
  res.status(StatusCodes.OK).json({ todos: todos.rows });
};
const getSingleTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  res.status(StatusCodes.OK).json({ todo: todo.rows[0] });
};
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  //Use RETURNING * to get the values - For creating and updating use this
  const todo = await Pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id= $2 RETURNING *",
    [description, id]
  );
  res.status(StatusCodes.OK).json(todo.rows[0]);
};
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  res.status(StatusCodes.OK).json("deleted Todo");
};

module.exports = {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
