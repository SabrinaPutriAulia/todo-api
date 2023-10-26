const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.get("/api/health-check", todoController.healthCheck);
router.get("/api/todo", todoController.getAllTodos);
router.get("/api/todo/:id", todoController.getTodoById);
router.post("/api/todo", todoController.createNewTodo);
router.put("/api/todo/:id", todoController.updateTodoById);
router.delete("/api/todo/:id", todoController.deleteTodoById);

module.exports = router;
