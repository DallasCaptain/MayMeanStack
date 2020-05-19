import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ColorComponent } from './color/color.component';


const routes: Routes = [
  { path: 'tasks', component: TaskComponent, children:[
    { path: 'color/:chosenColor', component: ColorComponent}
  ]},

  { path: 'tasks2', component: TaskComponent, children:[
    { path: 'color/:chosenColor', component: ColorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
