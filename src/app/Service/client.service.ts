import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../models/menu';
import {environment} from '../../environments/environment';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  update(id, client: Client) {

    return this.http.put(environment.base_url + "clients/update/" + id, client);
  }

  delete(id) {

    return this.http.delete(environment.base_url + "clients/remove/" + id)
  }

  getAllClients() {

    return this.http.get(environment.base_url + "clients/all");
  }


  add(nom,prenom,numero_telephone, email,sexe,adresse,password ,fileToUpload) {

    console.log("firstName : ", nom)
    console.log("lastName : ", prenom)
    console.log("email : ", email)
    console.log("tel : ", numero_telephone)
    console.log("password : ", password)

    console.log("image : ", fileToUpload)
    let formData = new FormData();

    formData.append("image", fileToUpload, fileToUpload.name);
    formData.append("firstName", "" + nom);
    formData.append("lastName", "" + prenom);
    formData.append("email", "" + email);
    formData.append("tel", "" + numero_telephone);
    formData.append("adresse", "" + adresse);
    formData.append("sexe", "" + sexe);




    return this.http.post(environment.base_url + "clients/register", formData);

  }

  uploads(file) {

    console.log("file");

    let formdata=new FormData();

    formdata.append("image",file);
    return this.http.post(environment.base_url+"/clients/uploads",formdata)
  }
}
