import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient) {
    // this.getTasks()
  }

  getTasks(){
    let tempObersvable = this._http.get('/tasks')
    return tempObersvable
    // tempObersvable.subscribe(data => console.log('Got our tasks', data));
  }

  createTasks(task: { name: string; }) {
      let tempObersvable = this._http.post('/tasks', task)
      return tempObersvable
    }

}
