const path = require('path');

// Helper function to render the create user page
const renderCreateUserEJS = (res, message) => {
    res.render('createUser.ejs', { message });
};

// Helper function to render the tasks page
const renderTasks = async (res, message) => {
    try {
        const tasks = await toDoTask.find({});
        res.render('tasks.ejs', { todoTasks: tasks, message });
    } catch (err) {
        res.status(500).send('Error rendering tasks');
    }
};

module.exports = {
    renderCreateUserEJS,
    renderTasks
};