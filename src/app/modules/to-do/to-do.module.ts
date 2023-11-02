import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoMainComponent } from './components/to-do-main/to-do-main.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { toDoRoutes } from './to-do-routing';
import { FilterComponent } from './components/filter/filter.component';
import { CounterComponent } from './components/counter/counter.component';
import { AddTaskButtonComponent } from './components/add-task-button/add-task-button.component';
import { DeleteTaskButtonComponent } from './components/delete-task-button/delete-task-button.component';
import { EditTaskButtonComponent } from './components/edit-task-button/edit-task-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ToDoMainComponent,
    PostItemComponent,
    PostListComponent,
    FilterComponent,
    CounterComponent,
    AddTaskButtonComponent,
    DeleteTaskButtonComponent,
    EditTaskButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(toDoRoutes),
    MatButtonModule
  ],
  exports: []
})
export class ToDoModule { }
