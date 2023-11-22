import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TaskFilterService } from '../../services/task-filter.service';
import { Subject, takeUntil } from 'rxjs';
import { TaskStatus } from '../../enums/todo-enums';
import { ITask } from 'src/app/shared/interfaces/ITask';

@Component({
  selector: 'todo-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy, OnChanges {
  @Input() tasks: ITask[] = [];
  protected counter: string = '';
  private unsubscribe$ = new Subject<void>();
  private status: TaskStatus = TaskStatus.ALL;

  constructor(private taskFilterSer: TaskFilterService) {}

  ngOnInit(): void {
    this.taskFilterSer.getSubject().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      (response) => {
        this.status = response;
        this.displayCounter();
      }
    )
  }

  ngOnChanges(): void {
    this.displayCounter();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private displayCounter() {
    const completedNumber = this.tasks.filter(task => task.isCompleted).length;
    const pendingNumber = this.tasks.length - completedNumber;
    if(this.status == TaskStatus.COMPLETED) {
      this.counter = 'Completed ' + completedNumber + ' / All ' + this.tasks.length;
    } else {
      this.counter = 'Ongoing ' + pendingNumber + ' / All ' + this.tasks.length;
    }
  }
}
