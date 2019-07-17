import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../models/reservation';
import {environment} from '../../environments/environment';
import {Offre} from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  constructor(private http:HttpClient) {}
  update(id,offre : Offre ){

    return this.http.put(environment.base_url+"offres/update/"+id,offre);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"offres/remove/"+id)
  }
  getAllOffres(){

    return this.http.get(environment.base_url+"offres/all") ; }

  add(titre,fileToUpload, desc_off,date_expiration) {

    console.log("titre : ", titre)
    console.log("image : ", fileToUpload)
    console.log("desc_off : ", desc_off)
    console.log("date_expiration : ", date_expiration)
    let formData = new FormData();

    formData.append("image", fileToUpload, fileToUpload.name);
    formData.append("titre", "" + titre);
    formData.append("desc_off", "" + desc_off);
    formData.append("date_expiration", "" + date_expiration);
    return this.http.post(environment.base_url + "offres/add", formData);

  }
}
