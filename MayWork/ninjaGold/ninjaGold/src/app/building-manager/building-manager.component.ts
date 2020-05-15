import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-building-manager',
  templateUrl: './building-manager.component.html',
  styleUrls: ['./building-manager.component.scss']
})
export class BuildingManagerComponent implements OnInit {
  @Input() score: number;
  @Output() changedGold = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  buildingClicked(min: number, max: number, location: string): void{
    // console.log(location)
    //console.log(Math.floor(Math.random()*(max-min+1)) +min)
    this.score += Math.floor(Math.random()*(max-min+1)) +min
    this.changedGold.emit(this.score)
  }

  
}
