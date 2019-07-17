import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../models/categorie';
import {environment} from '../../environments/environment';
import {Commande} from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private http:HttpClient) {}
  update(id,commande : Commande){


    return this.http.put(environment.base_url+"commandes/update?id="+id,commande);
  }

  delete(id) {

    return this.http.delete(environment.base_url+"commandes/remove/"+id)
  }
  getAllCommande(){

    return this.http.get(environment.base_url+"commandes/all") ; }

  add(totale,etat,dateexpiration,datecommande){


    console.log("totale : ",totale);
    console.log("etat : ",etat);
    console.log("date_expiration : ",dateexpiration);
    console.log("date_commande : ",datecommande);
    let formData = new FormData();

    formData.append("totale",""+totale);
    formData.append("etat",""+etat);
    formData.append("date_expiration",""+dateexpiration);
    formData.append("date_commande",""+datecommande);



    return this.http.post(environment.base_url+"categories/add",formData);

  }

}
