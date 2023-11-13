import { Component } from '@angular/core';
import { TaskStatus } from '../../enums/todo-enums';
import { TaskFilterService } from '../../services/task-filter.service';
import { ISelectChoice } from 'src/app/shared/interfaces/ISelectChoice';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  protected choices: ISelectChoice[] = [
    { id: TaskStatus.ALL, viewValue: 'All', value: TaskStatus.ALL },
    { id: TaskStatus.ACTIVE, viewValue: 'Active', value: TaskStatus.ACTIVE },
    { id: TaskStatus.COMPLETED, viewValue: 'Completed', value: TaskStatus.COMPLETED }
  ]

  constructor(
    private taskFilterSer: TaskFilterService
  ) {}

  protected handleChoiceClick(value: unknown): void {
    this.taskFilterSer.send(value as TaskStatus);
  }
}
