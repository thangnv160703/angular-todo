import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskStatus } from '../enums/todo-enums';

@Injectable({
  providedIn: 'root'
})
export class TaskFilterService {
  private taskSubject = new BehaviorSubject<TaskStatus>(TaskStatus.ALL);

  constructor() { }

  public send(status: TaskStatus): void{
    this.taskSubject.next(status);
  }

  public getSubject(): BehaviorSubject<TaskStatus> {
    return this.taskSubject;
  }
}
