import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-thingamabob-list',
  templateUrl: './thingamabob-list.component.html',
  styleUrls: ['./thingamabob-list.component.scss']
})
export class ThingamabobListComponent implements OnInit {
  thingamabobs: Array<{name:string,color:string,material:string}>
  loading = false
  constructor(private _httpService: HttpService) {
    this.thingamabobs = []
   }

  ngOnInit() {
    this.loading = true
    this._httpService.getAll_thingamabobs().subscribe(data => {
      //@ts-ignore
      this.thingamabobs = data
      this.loading = false;
    })
  }

}
