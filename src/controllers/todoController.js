const todoService = require('../services/todoService');

// GET all todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        res.status(200).json(todos);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err });
      }
};

// GET a todo by id
exports.getTodoById = async (req, res) => {
    try {
        const todo = await todoService.getTodoById(req.params.id);
        res.status(200).json(todo);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todo', error: err });
      }
};

// GET todos by creator
exports.getTodoByCreator = async (req, res) => {
    try {
        const todos = await todoService.getTodoByCreator(req.params.creator);
        res.status(200).json(todos);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching todos', error: err });
      }
};

// POST a new todo
exports.createNewTodo = async (req, res) => {
    try {
        const todo = await todoService.createNewTodo(req.body);
        res.status(201).json(todo);
      } catch (err) {
        res.status(500).json({ message: 'Error adding todo', error: err });
      }
};

// PUT update a todo by id
exports.updateTodoById = async (req, res) => {
    try {
        const todo = await todoService.updateTodoById(req.params.id, req.body);
        res.status(200).json(todo);
      } catch (err) {
        res.status(500).json({ message: 'Error updating todo', error: err });
      }
};

// DELETE a todo by id
exports.deleteTodoById = async (req, res) => {
    try {
        const todo = await todoService.deleteTodoById(req.params.id);
        res.status(200).json(todo);
      } catch (err) {
        res.status(500).json({ message: 'Error deleting todo', error: err });
      }
};
