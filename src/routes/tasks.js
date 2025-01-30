const express = require('express');
const { addTask, editTask, removeTask } = require('../controllers/todoController');

const router = express.Router();

router.post('/addToDo', addTask);

router.route('/edit/:id')
    .get(async (req, res) => {
        const { id } = req.params;
        try {
            const tasks = await toDoTask.find({});
            //res.render('todoUpdate.ejs', { todoTasks: tasks, taskId: id });
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .post(editTask);

router.get('/remove/:id', removeTask);

module.exports = router;