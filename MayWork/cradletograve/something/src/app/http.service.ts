import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient) { }

  getDelay(){
    return this._http.get('/delayed')
  }

  getUsers(){
    return this._http.get('/users')
  }
  getUser(email){
    return this._http.get('/users/'+email)
  }
  createUser(newUser){
    return this._http.post('/users',newUser)
  }

  updateUser(updatedUser){
    return this._http.put('/users/'+updatedUser.id, updatedUser)
  }

  destroyUser(userToDestroy){
    return this._http.delete('/users/'+userToDestroy.id)
  }

  //THINGAMABOBS

  getAll_thingamabobs(){
    return this._http.get('/api/thingamabobs')
  }

  createThingy(newthingy: { name: string; color: string; material: string; }) {
    return this._http.post('/api/thingamabobs', newthingy)
  }

}
