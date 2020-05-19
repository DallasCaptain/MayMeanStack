import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThingamabobNewComponent } from './thingys/thingamabob-new/thingamabob-new.component';
import { ThingamabobListComponent } from './thingys/thingamabob-list/thingamabob-list.component';


const routes: Routes = [
  { path: 'thingys', component: ThingamabobListComponent},
  { path: 'thingys/new', component: ThingamabobNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
