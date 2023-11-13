import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, pipe, takeUntil } from 'rxjs';
import { TaskCrudService } from 'src/app/shared/services/task-crud.service';
import { TaskFilterService } from '../../services/task-filter.service';

@Component({
  selector: 'app-to-do-main',
  templateUrl: './to-do-main.component.html',
  styleUrls: ['./to-do-main.component.scss']
})
export class ToDoMainComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  protected taskId!: number;

  constructor(
    private taskCrudSer: TaskCrudService,
    private taskFilterSer: TaskFilterService
  ) { }

  ngOnInit(): void {
    this.taskCrudSer.getAll().subscribe(
      response => console.log(response)
    )
    this.taskFilterSer.getSubject().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      response => console.log(response)
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
