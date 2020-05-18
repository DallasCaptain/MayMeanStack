import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'Hello Class';
  anotherAttr: string =''
  constructor(private _httpService: HttpService){  }

  ngOnInit(){
    this._httpService.getDelay().subscribe(data =>{
      this.title = data
    })
    this.somefunction()
    this.anotherAttr = 'from ngOnInit'
  }

  somefunction(){
    console.log(this.title)
  }


}
