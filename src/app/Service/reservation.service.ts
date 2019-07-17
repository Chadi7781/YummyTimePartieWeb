import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../models/categorie';
import {environment} from '../../environments/environment';
import {Reservation} from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http:HttpClient) {}
  update(id,reservation : Reservation ){

    return this.http.put(environment.base_url+"reservations/update/"+id,reservation);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"reservations/remove/"+id)
  }
  getAllReservations(){

    return this.http.get(environment.base_url+"reservations/all") ; }
}
