import {Component, OnInit, OnDestroy} from '@angular/core';
import {Filter, FilterButton} from "../../models/filtering.model";
import {Observable, Subject, takeUntil} from "rxjs";
import {TodoService} from "../../services/todo.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit, OnDestroy {
  filterButtons: FilterButton[] = [
    {type: Filter.All, label: 'All', isActive: true},
    {type: Filter.Active, label: 'Active', isActive: false},
    {type: Filter.Completed, label: 'Completed', isActive: false},
  ]

  length = 0;
  hasComplete$: Observable<boolean>;
  destroy$: Subject<null> = new Subject<null>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.hasComplete$ =this.todoService.todos$.pipe(
      map(todos => todos.some(t => t.isCompleted)),
      takeUntil(this.destroy$)
    );

    this.todoService.length$.pipe(takeUntil(this.destroy$)).subscribe(length => {
      this.length = length;
    })
  }

  filter(type: Filter){
    this.setActiveFilterBtn(type);
    this.todoService.filterTodos(type);
  }

  clearCompleted(){
    this.todoService.clearCompleted();
  }

  private setActiveFilterBtn(type: Filter){
    this.filterButtons.forEach(btn => {
      btn.isActive = btn.type === type;
    })
  }
  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
