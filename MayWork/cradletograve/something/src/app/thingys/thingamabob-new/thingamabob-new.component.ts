import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thingamabob-new',
  templateUrl: './thingamabob-new.component.html',
  styleUrls: ['./thingamabob-new.component.scss']
})
export class ThingamabobNewComponent implements OnInit {
  newthingy:{name:string,color:string,material:string}
  constructor(private _httpService: HttpService, private _router: Router) { 
    this.newthingy = {name:"",color:"",material:""}
  }

  ngOnInit() {
  }

  createThingy(){
    
    this._httpService.createThingy(this.newthingy).subscribe(data=>{
      //@ts-ignore
      if(data._id){
        this._router.navigate(['/thingys'])
      }
    })
  }
}
