import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'Thingamaworks';
  anotherAttr: string =''
  constructor(private _httpService: HttpService){  }

  ngOnInit(){
    
  }

  


}
