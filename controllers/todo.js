const TodoModel = require("../models/todo.model");

exports.createTodo = () => {
  console.log(`createTodo`);
  TodoModel.create();
};
