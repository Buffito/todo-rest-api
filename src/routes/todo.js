const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authenticateJWT = require('../middleware/auth');

router.use(authenticateJWT);

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
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
 * @openapi
 * /tasks:
 *   get:
 *     summary: Get all todos
 *     security:
 *       - bearerAuth: []
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
router.get('/', todoController.getAllTodos);

/**
 * @openapi
 * /tasks/{id}:
 *   get:
 *     summary: Get a todo by ID
 *     security:
 *       - bearerAuth: []
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
router.get('/:id', todoController.getTodoById);

/**
 * @openapi
 * /tasks/creator/{creator}:
 *   get:
 *     summary: Get todos by creator
 *     security:
 *       - bearerAuth: []
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
router.get('/creator/:creator', todoController.getTodoByCreator);

/**
 * @openapi
 * /tasks:
 *   post:
 *     summary: Create a new todo
 *     security:
 *       - bearerAuth: []
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
router.post('/', todoController.createNewTodo);

/**
 * @openapi
 * /tasks/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     security:
 *       - bearerAuth: []
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
router.put('/:id', todoController.updateTodoById);

/**
 * @openapi
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     security:
 *       - bearerAuth: []
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
router.delete('/:id', todoController.deleteTodoById);

module.exports = router;
