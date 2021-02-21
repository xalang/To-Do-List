const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
        name: {type: String, required: true},
        todoItem: {type: String, required: true}
}, {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;