var TodoService = (function () {
    function TodoService() {
        this.todos = ['Learn Angular2', 'Learn DI', 'Clean house'];
    }
    TodoService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    return TodoService;
})();
exports.TodoService = TodoService;
