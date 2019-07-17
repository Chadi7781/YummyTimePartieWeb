import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../models/categorie';
import {environment} from '../../environments/environment';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http: HttpClient) {
  }

  update(id, categorie: Categorie) {

    return this.http.put(environment.base_url + "categories/update/"+ id, categorie);
  }

  delete(id) {

    return this.http.delete(environment.base_url + "categories/remove/"+ id)
  }

  getAllCategories() {

    return this.http.get(environment.base_url + "categories/all");
  }


  add(titre ,fileToUpload) {

    console.log("titre : ", titre)
    console.log("image : ", fileToUpload)
    let formData = new FormData();

    formData.append("image", fileToUpload, fileToUpload.name);
    formData.append("titre", "" +titre);

    return this.http.post(environment.base_url + "categories/add", formData);

  }



  getAllCategorieByID(id) {

    return this.http.get(environment.base_url + "categories/byID/"+id);
  }


}
