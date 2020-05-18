import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'superForms';
  person1 = {name:'charlie',color:'red'}
  person2 = {name:'willy',color:'brown'}




  log1(){
    console.log(this.person1)
  }
}
