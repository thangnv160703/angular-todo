import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoMainComponent } from './components/to-do-main/to-do-main.component';
import { RouterModule } from '@angular/router';
import { toDoRoutes } from './to-do-routing';
import { FilterComponent } from './components/filter/filter.component';
import { CounterComponent } from './components/counter/counter.component';
import { AddTaskButtonComponent } from './components/add-task-button/add-task-button.component';
import { DeleteTaskButtonComponent } from './components/delete-task-button/delete-task-button.component';
import { EditTaskButtonComponent } from './components/edit-task-button/edit-task-button.component';
import { MatButtonModule } from '@angular/material/button';
import { TrudiSelectComponent } from 'src/app/shared/components/trudi-select/trudi-select.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    ToDoMainComponent,
    FilterComponent,
    CounterComponent,
    AddTaskButtonComponent,
    DeleteTaskButtonComponent,
    EditTaskButtonComponent,
    TaskListComponent,
    TaskListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(toDoRoutes),
    MatButtonModule,
    TrudiSelectComponent
  ],
  exports: []
})
export class ToDoModule { }
