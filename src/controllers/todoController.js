const express = require('express');
const router = express.Router();
const todoService = require('../services/todoService');

// GET all todos
router.get('/todos', async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        res.status(200).json({ message: 'Todos fetched successfully', data: todos });
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err });
      }
});

// GET a todo by id
router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await todoService.getTodoById(req.params.id);
        res.status(200).json({ message: 'Todo fetched successfully', data: todo });
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todo', error: err });
      }
});

// GET todos by creator
router.get('/todos/creator/:creator', async (req, res) => {
    try {
        const todos = await todoService.getTodoByCreator(req.params.creator);
        res.status(200).json({ message: 'Todos fetched successfully', data: todos });
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err });
      }
});

// POST a new todo
router.post('/todos', async (req, res) => {
    try {
        const todo = await todoService.createNewTodo(req.body);
        res.status(201).json({ message: 'Todo added successfully', data: todo });
      } catch (err) {
        res.status(500).json({ message: 'Error adding todo', error: err });
      }
});

// PUT update a todo by id
router.put('/todos/:id', async (req, res) => {
    try {
        const todo = await todoService.updateTodoById(req.params.id, req.body);
        res.status(200).json({ message: 'Todo updated successfully', data: todo });
      } catch (err) {
        res.status(500).json({ message: 'Error updating todo', error: err });
      }
});

// DELETE a todo by id
router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await todoService.deleteTodoById(req.params.id);
        res.status(200).json({ message: 'Todo deleted successfully', data: todo });
      } catch (err) {
        res.status(500).json({ message: 'Error deleting todo', error: err });
      }
});

module.exports = router;