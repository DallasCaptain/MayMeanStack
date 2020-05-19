import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { BearComponent } from './bears/bear/bear.component';
import { BearlistComponent } from './bears/bearlist/bearlist.component';
import { NewbearComponent } from './bears/newbear/newbear.component';
import { EditbearComponent } from './bears/editbear/editbear.component';
import { ThingamabobComponent } from './thingys/thingamabob/thingamabob.component';
import { ThingamabobListComponent } from './thingys/thingamabob-list/thingamabob-list.component';
import { ThingamabobNewComponent } from './thingys/thingamabob-new/thingamabob-new.component'

@NgModule({
  declarations: [
    AppComponent,
    BearComponent,
    BearlistComponent,
    NewbearComponent,
    EditbearComponent,
    ThingamabobComponent,
    ThingamabobListComponent,
    ThingamabobNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
