import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  title = "new task"
  constructor() {
    console.log('constructed new tasks component')
   }

  ngOnInit() {
    console.log('initialized new tasks component')
  }

  onChangeTitleClick(){
    this.title += 'more stuff'
  }

}
