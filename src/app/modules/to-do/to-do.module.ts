import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoMainComponent } from './components/to-do-main/to-do-main.component';
import { RouterModule } from '@angular/router';
import { toDoRoutes } from './to-do-routing';
import { FilterComponent } from './components/filter/filter.component';
import { CounterComponent } from './components/counter/counter.component';
import { DeleteTaskButtonComponent } from './components/delete-task-button/delete-task-button.component';
import { EditTaskButtonComponent } from './components/edit-task-button/edit-task-button.component';
import { MatButtonModule } from '@angular/material/button';
import { TrudiSelectComponent } from 'src/app/shared/components/trudi-select/trudi-select.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { TrudiCheckboxComponent } from 'src/app/shared/components/trudi-checkbox/trudi-checkbox.component';
import { TrudiButtonComponent } from 'src/app/shared/components/trudi-button/trudi-button.component';
import { AddTaskButtonComponent } from './components/add-task-button/add-task-button.component';
import { DeleteTaskDialogComponent } from './components/delete-task-dialog/delete-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEditTaskDialogComponent } from './components/add-edit-task-dialog/add-edit-task-dialog.component';
import { TrudiTextFieldComponent } from 'src/app/shared/components/trudi-text-field/trudi-text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { TrudiDatepickerComponent } from 'src/app/shared/components/trudi-datepicker/trudi-datepicker.component';
import { TrudiLoadingPageComponent } from 'src/app/shared/components/trudi-loading-page/trudi-loading-page.component';

@NgModule({
  declarations: [
    ToDoMainComponent,
    FilterComponent,
    CounterComponent,
    DeleteTaskButtonComponent,
    EditTaskButtonComponent,
    TaskListComponent,
    TaskListItemComponent,
    AddTaskButtonComponent,
    DeleteTaskDialogComponent,
    AddEditTaskDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(toDoRoutes),
    MatButtonModule,
    TrudiSelectComponent,
    TrudiCheckboxComponent,
    TrudiButtonComponent,
    MatDialogModule,
    TrudiTextFieldComponent,
    ReactiveFormsModule,
    HighlightDirective,
    TrudiDatepickerComponent,
    TrudiLoadingPageComponent
  ],
  exports: []
})
export class ToDoModule { }
