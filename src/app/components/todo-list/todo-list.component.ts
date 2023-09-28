import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  todo$: Observable<Todo[]>

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todo$ = this.todoService.todos$;
  }

  onEditTodo(todo: Todo) {
    this.todoService.editTodo(todo.id, todo.content)
  }

  onChangeTodoStatus(todo: Todo) {
    this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
  }

  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
