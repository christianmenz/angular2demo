/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var todoService_1 = require('todoService');
var TodoApp = (function () {
    function TodoApp(todoService) {
        this.todoService = todoService;
        this.title = 'My TODO app';
    }
    TodoApp.prototype.addTodo = function (newTodo) {
        this.todoService.addTodo(newTodo.value);
        newTodo.value = '';
        newTodo.focus();
    };
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'todo-app',
            services: [todoService_1.TodoService]
        }),
        angular2_1.View({
            templateUrl: 'todo.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }),
        __param(0, angular2_1.Inject('TodoService')), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoApp);
    return TodoApp;
})();
exports.TodoApp = TodoApp;
angular2_1.bootstrap(TodoApp, [todoService_1.TodoService, angular2_1.bind('TodoService').toClass(todoService_1.TodoService)]);
