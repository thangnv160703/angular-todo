import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components/hello/hello.component';
import { TutorialMainComponent } from './components/tutorial-main/tutorial-main.component';
import { RouterModule } from '@angular/router';
import { tutorialRoutes } from './tutorial-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InnerCompComponent } from './components/inner-comp/inner-comp.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component'
import { TrudiTextFieldComponent } from 'src/app/shared/components/trudi-text-field/trudi-text-field.component';

@NgModule({
  declarations: [
    HelloComponent,
    TutorialMainComponent,
    InnerCompComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tutorialRoutes),
    FormsModule,
    ReactiveFormsModule,
    TrudiTextFieldComponent
  ],
  exports: []
})
export class TutorialModule { }
