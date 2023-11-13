import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./modules/to-do/to-do.module').then(m => m.ToDoModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./modules/tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
