import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../models/reservation';
import {environment} from '../../environments/environment';
import {Livreur} from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  constructor(private http:HttpClient) {}
  update(id,livreur : Livreur ){

    return this.http.put(environment.base_url+"livreurs/update/"+id,livreur);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"livreurs/remove/"+id)
  }
  getAllLivreurs(){
    return this.http.get(environment.base_url+"livreurs/all") ; }


  add(livreur){
    return this.http.post(environment.base_url + "livreurs/register", livreur);

  }

  }
