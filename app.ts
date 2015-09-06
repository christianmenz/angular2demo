/// <reference path="typings/angular2/angular2.d.ts" />

import {bind, Inject, Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from 'todoService';

@Component({
  selector: 'todo-app',
  services: [TodoService]
})
@View({
  templateUrl: 'todo.html',
  directives: [CORE_DIRECTIVES]
})
export class TodoApp {
  title: string;
  todoService: TodoService;

  constructor(@Inject('TodoService') todoService: TodoService) {
    this.todoService = todoService;
    this.title = 'My TODO app';
  }

  keyup(newTodo, $event) {
    if ($event.which === 13) {
      this.addTodo(newTodo);
    }
  }

  addTodo(newTodo):void {
      this.todoService.addTodo(newTodo.value);
      newTodo.value = '';
      newTodo.focus();
    }
  }
}

bootstrap(TodoApp, [TodoService, bind('TodoService').toClass(TodoService)]);
