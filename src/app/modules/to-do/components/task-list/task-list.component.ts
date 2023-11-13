import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { TaskFilterService } from '../../services/task-filter.service';
import { Subject, takeUntil } from 'rxjs';
import { TaskStatus } from '../../enums/todo-enums';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() cachedtasks: ITask[] = [];
  private unsubscribe$ = new Subject<void>();
  protected tasks: ITask[] = [];
  private taskStatus!: TaskStatus;

  constructor(
    private taskFilterSer: TaskFilterService
  ) { }

  ngOnInit(): void {
    this.taskFilterSer.getSubject().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      response => {
        this.taskStatus = response;
        this.filterTasks();
      }
    )
  }

  ngOnChanges(): void {
    this.filterTasks();
  }

  private filterTasks(): void {
    switch (this.taskStatus) {
      case TaskStatus.ACTIVE:
        this.tasks = this.cachedtasks.filter(task => !task.isCompleted);
        break;
      case TaskStatus.COMPLETED:
        this.tasks = this.cachedtasks.filter(task => task.isCompleted);
        break;
      default:
        this.tasks = this.cachedtasks;
        break;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
