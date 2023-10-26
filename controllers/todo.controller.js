const { request, response } = require("express");
const { Todo } = require("../models");

const healthCheck = (request, response) => {
  response.status(200).json({ message: "Hello World" });
};

const getAllTodos = (request, response) => {
  Todo.findAll()
    .then((todos) => {
      response.status(200).json({ data: todos });
    })
    .catch((error) => {
      response.status(500).json({ message: "Internal Server Error" });
    });
};

const getTodoById = (request, response) => {
  const id = request.params.id;
  Todo.findByPk(id)
    .then((todo) => {
      if (!todo) {
        response.status(404).json({ message: "Todo not found!" });
      } else {
        response.status(200).json({ data: todo });
      }
    })
    .catch((error) => {
      response.status(500).json({ message: "Internal Server Error" });
    });
};

const createNewTodo = (request, response) => {
  Todo.create(request.body)
    .then((todo) => {
      response.status(201).json({ message: "Todo created successfully!" });
    })
    .catch((error) => {
      response.status(500).json({ message: "Internal Server Error" });
    });
};

const updateTodoById = (request, response) => {
  const id = request.params.id;
  Todo.findByPk(id)
    .then((todo) => {
      if (!todo) {
        response.status(404).json({ message: "Todo not found!" });
      } else {
        return Todo.update(request.body, { where: { id: id } });
      }
    })
    .then(() => {
      response
        .status(200)
        .json({ todo: request.body, message: "Todo updated successfully!" });
    })
    .catch((error) => {
      response.status(500).json({ message: "Internal Server Error" });
    });
};

const deleteTodoById = (request, response) => {
  const id = request.params.id;
  Todo.findByPk(id)
    .then((todo) => {
      if (!todo) {
        response.status(404).json({ message: "Todo not found!" });
      } else {
        return Todo.destroy({ where: { id: id } });
      }
    })
    .then(() => {
      response.status(200).json({ message: "Todo deleted successfully!" });
    })
    .catch((error) => {
      response.status(500).json({ message: "Internal Server Error" });
    });
};

module.exports = {
  healthCheck,
  getAllTodos,
  getTodoById,
  createNewTodo,
  updateTodoById,
  deleteTodoById,
};
