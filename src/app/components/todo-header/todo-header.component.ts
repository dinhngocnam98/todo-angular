import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  toggleAll(){
    this.todoService.toggleAll();
  }
}
