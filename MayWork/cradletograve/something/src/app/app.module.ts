import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { BearComponent } from './bears/bear/bear.component';
import { BearlistComponent } from './bears/bearlist/bearlist.component';
import { NewbearComponent } from './bears/newbear/newbear.component';
import { EditbearComponent } from './bears/editbear/editbear.component'

@NgModule({
  declarations: [
    AppComponent,
    BearComponent,
    BearlistComponent,
    NewbearComponent,
    EditbearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
