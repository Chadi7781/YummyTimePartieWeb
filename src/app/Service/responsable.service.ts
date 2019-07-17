import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../models/reservation';
import {environment} from '../../environments/environment';
import {Responsable} from '../models/responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  constructor(private http:HttpClient) {}
  update(id,responsable : Responsable ){

    return this.http.put(environment.base_url+"responsables/update/"+id,responsable);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"responsables/remove/"+id)
  }
  getAllResponsables(){

    return this.http.get(environment.base_url+"responsables/all") ; }


  add(data) {

    return this.http.post(environment.base_url + "responsables/register",data);

  }

 getAllFalse (){
    return this.http.get(environment.base_url+ 'responsables/allFalse')
 }



}
