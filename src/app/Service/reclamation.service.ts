import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../models/reservation';
import {environment} from '../../environments/environment';
import {Reclamation} from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  constructor(private http: HttpClient) {
  }

  update(id, reclamation: Reclamation) {

    return this.http.put(environment.base_url + "reclamations/update/" + id, reclamation);
  }

  delete(id) {

    return this.http.delete(environment.base_url + "reclamations/remove/" + id)
  }

  getAllReclamation() {

    return this.http.get(environment.base_url + "reclamations/all");
  }

  addReclamation(data) {
    return this.http.post(environment.base_url + "reclamations/add",data);


  }
}
