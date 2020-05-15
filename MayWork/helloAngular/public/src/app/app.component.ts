import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Class';
  favoriteColor = 'Red';
  tasks: any = [];

  constructor(private _httpService: HttpService){
    _httpService.getTasks().subscribe(data => {
      console.log('get tasks in component:',data)
      this.tasks = data;
    })
  }
  

  onClickAddTask(){
    
    this._httpService.createTasks({name:'sweep kitchen floor'}).subscribe(data => {
      // console.log('posted task returned:', data)
      this.tasks.push(data)
    })
  }



}


