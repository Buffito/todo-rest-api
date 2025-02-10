const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.getAllTodos);
router.get('/todos/:id', todoController.getTodoById);
router.get('/todos/creator/:creator', todoController.getTodoByCreator);
router.post('/todos', todoController.createNewTodo);
router.put('/todos/:id', todoController.updateTodoById);
router.delete('/todos/:id', todoController.deleteTodoById);

module.exports = router;