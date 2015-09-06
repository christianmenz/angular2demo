/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'todo.html',
  directives: [CORE_DIRECTIVES]
})
class MyAppComponent {
  title: string;
  todos: string[];

  constructor() {
    this.title = 'My TODO app';
    this.todos = ['Learn Angular', 'Clean house'];
  }

  addTodo(newTodo):void {
    this.todos.push(newTodo.value);
    newTodo.value = '';
    newTodo.focus();
  }
}

bootstrap(MyAppComponent);
