import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ninjaGold';
  score: number;
  @ViewChild(HistoryComponent,null)
  private _historyComponent: HistoryComponent;

  ngOnInit(){
    this.score = 0
  }

  goldChanged(newScore: number):void{
    this.score = newScore
    this._historyComponent.addHistory('you now have ' +newScore)
  }
}
