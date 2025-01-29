const toDoTask = require('../models/toDoTask');
const { renderTasks } = require('../utils/renderHelpers');

const addTask = async (req, res) => {
    const { content } = req.body;
    const creator = loggedUser;
    const newToDo = new toDoTask({ content, creator });

    try {
        await newToDo.save();
        renderTasks(res, '');
    } catch (err) {
        renderTasks(res, 'Task was not created!');
    }
};

const editTask = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        await toDoTask.findByIdAndUpdate(id, { content });
        renderTasks(res, '');
    } catch (err) {
        res.status(500).send(err);
    }
};

const removeTask = async (req, res) => {
    const { id } = req.params;
    try {
        await toDoTask.findByIdAndRemove(id);
        renderTasks(res, '');
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    addTask,
    editTask,
    removeTask
};