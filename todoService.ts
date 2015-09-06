
export class TodoService {

  todos: string[] = ['Learn Angular2', 'Learn DI', 'Clean house'];

  addTodo(todo): void {
    this.todos.push(todo);
  }

}
