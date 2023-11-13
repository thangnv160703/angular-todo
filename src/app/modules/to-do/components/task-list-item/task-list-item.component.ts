import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/ITask';
import { TodoReloadService } from '../../services/todo-reload.service';

@Component({
  selector: 'todo-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent {
  @Input() task!: ITask;

  constructor(
    private reloadSer: TodoReloadService
  ) { }

  protected handleCheckboxChange(): void {
    this.task.isCompleted = !this.task.isCompleted;
  }

  protected handleEditClick(): void {
    console.log('Edit: ', this.task.id);
  }

  protected handleDeleteClick(): void {
    console.log('Delete: ', this.task.id);
    this.reloadSer.reload();
  }
}
