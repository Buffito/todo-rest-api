const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     TodoInput:
 *       type: object
 *       properties:
 *         content:
 *           type: string
 *           example: "Buy groceries"
 *         creator:
 *           type: string
 *           example: "johndoe"
 *       required:
 *         - content
 *         - creator
 *     Todo:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         content:
 *           type: string
 *         creator:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 */

 /**
  * @swagger
  * /todos:
  *   get:
  *     summary: Get all todos
  *     responses:
  *       200:
  *         description: List of todos
  *         content:
  *           application/json:
  *             schema:
  *               type: array
  *               items:
  *                 $ref: '#/components/schemas/Todo'
  */
router.get('/todos', todoController.getAllTodos);

 /**
  * @swagger
  * /todos/{id}:
  *   get:
  *     summary: Get a todo by ID
  *     parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         schema:
  *           type: string
  *     responses:
  *       200:
  *         description: Todo found
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Todo'
  */
router.get('/todos/:id', todoController.getTodoById);

 /**
  * @swagger
  * /todos/creator/{creator}:
  *   get:
  *     summary: Get todos by creator
  *     parameters:
  *       - name: creator
  *         in: path
  *         required: true
  *         schema:
  *           type: string
  *     responses:
  *       200:
  *         description: Todos by creator
  *         content:
  *           application/json:
  *             schema:
  *               type: array
  *               items:
  *                 $ref: '#/components/schemas/Todo'
  */
router.get('/todos/creator/:creator', todoController.getTodoByCreator);

 /**
  * @swagger
  * /todos:
  *   post:
  *     summary: Create a new todo
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/TodoInput'
  *     responses:
  *       201:
  *         description: Todo created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Todo'
  */
router.post('/todos', todoController.createNewTodo);

 /**
  * @swagger
  * /todos/{id}:
  *   put:
  *     summary: Update a todo by ID
  *     parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         schema:
  *           type: string
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/TodoInput'
  *     responses:
  *       200:
  *         description: Todo updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Todo'
  */
router.put('/todos/:id', todoController.updateTodoById);

 /**
  * @swagger
  * /todos/{id}:
  *   delete:
  *     summary: Delete a todo by ID
  *     parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         schema:
  *           type: string
  *     responses:
  *       200:
  *         description: Todo deleted
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Todo'
  */
router.delete('/todos/:id', todoController.deleteTodoById);

module.exports = router;
