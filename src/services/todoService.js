const ToDo = require('../models/todo');

class todoService{
    async getAllTodos(){
        return await ToDo.find();
    }

    async getTodoById(id){
        return await ToDo.findById(id);
    }

    async getTodoByCreator(creator){
        return await ToDo.find({ creator: creator });
    }

    async createNewTodo (data){
        const newTodo = new ToDo({
            content: data.content,
            date: Date.now(),
            creator: data.creator,
          });

        return await newTodo.save();
    }

    async updateTodoById(id, data){
        return await ToDo.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteTodoById(id){
        return await ToDo.findByIdAndDelete(id);
    }
}

module.exports = new todoService();