import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { TaskCrudService } from 'src/app/shared/services/task-crud.service';
import { TodoReloadService } from '../../services/todo-reload.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-to-do-main',
  templateUrl: './to-do-main.component.html',
  styleUrls: ['./to-do-main.component.scss']
})
export class ToDoMainComponent implements OnInit, OnDestroy {
  protected taskList: ITask[] = [];
  private unsubscribe$ = new Subject<void>();
  protected loading = true;

  constructor(
    private taskCrudSer: TaskCrudService,
    private todoReloadSer: TodoReloadService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.todoReloadSer.getSubject().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      () => {
        console.log('get data');
        this.getData();
        this.loading = true;
      }
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getData(): void {
    this.taskCrudSer.getAll().subscribe(
      response => {
        this.taskList = response;
        this.loading = false;
      }
    )
  }
}
