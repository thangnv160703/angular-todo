import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { TodoReloadService } from '../../services/todo-reload.service';
import { TaskCrudService } from 'src/app/shared/services/task-crud.service';

@Component({
  selector: 'todo-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent {
  @Input() task!: ITask;

  constructor(
    private reloadSer: TodoReloadService,
    private taskCrudSer: TaskCrudService
  ) { }

  protected handleCheckboxChange(): void {
    this.task.isCompleted = !this.task.isCompleted;
    this.taskCrudSer.update(this.task).subscribe(
      () => this.reloadSer.reload()
    )
  }
}
