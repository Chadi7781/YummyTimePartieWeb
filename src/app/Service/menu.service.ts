import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../models/reservation';
import {environment} from '../../environments/environment';
import {Menu} from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) {}
  update(id,menu : Menu ){

    return this.http.put(environment.base_url+"menus/update/"+id,menu);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"menus/remove/"+id)
  }
  getAllOffres(){

    return this.http.get(environment.base_url+"menus/all") ; }
}
