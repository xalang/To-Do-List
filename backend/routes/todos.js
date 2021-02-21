const router = require('express').Router();
let Todo = require('../models/todo.models');

router.route('/').get((req,res) => {
    Todo.find()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const todoItem = req.body.todoItem;

    const newTodo = new Todo({
        name,
        todoItem
    });

    newTodo.save()
    .then(() => res.json('Todo added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(todo => res.json('Todo Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
           todo.name = req.body.name;
           todo.todoItem = req.body.todoItem;

           todo.save()
            .then(() => res.json("Todo Updated"))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;