import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supa',
  templateUrl: './supa.component.html',
  styleUrls: ['./supa.component.scss']
})
export class SupaComponent implements OnInit {
  @Input()person:{name: string,color: string};
  
  constructor() { }

  ngOnInit() {
    
  }

  create(){
    console.log('submit clicked',this.person);
    //this._httpService.create(this.person)
  }

  setPerson(){
    this.person.name = 'bob';
  }
}
