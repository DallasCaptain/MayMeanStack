import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: Array<string>
  constructor() { }

  ngOnInit() {
    this.history = [
      
    ]
  }

  addHistory(action: string):void{
    this.history.push(action)
  }

}
