import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Livreur} from '../models/livreur';
import {environment} from '../../environments/environment';
import {Demande} from '../models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) {}
  update(id,demande : Demande  ){

    return this.http.put(environment.base_url+"demandes/update/"+id,demande);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"demandes/remove/"+id)
  }
  getAllDemande(){
    return this.http.get(environment.base_url+"demandes/all") ; }


  add(nom_resto,nom_respo,email_respo,numero_telephone,longitude,latitude,mp,ville,adresse,nombre_table,fileToUpload){


    let formData = new FormData();

    formData.append("image", fileToUpload, fileToUpload.name);
    return this.http.post(environment.base_url + "demandes/add", formData);

  }

}

