import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Restaurant} from '../models/restaurant';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  update(id, restaurant: Restaurant) {

    return this.http.put(environment.base_url + "restaurants/update/" + id, restaurant);
  }

  delete(id) {

    return this.http.delete(environment.base_url + "restaurants/remove/"+ id)
  }

  getAllRestaurants() {

    return this.http.get(environment.base_url + "restaurants/all");
  }


  getAllRestaurantByID(id) {

    return this.http.get(environment.base_url + "restaurants/byID/"+id);
  }

  add(city,name,lat,lng,location,cuisine,openingTime,closingTime,phone,adress,nombre_table ,fileToUpload) {

    console.log("titre : ", city)
    console.log("titre : ", name)
    console.log("titre : ", lat)
    console.log("titre : ", lng)
    console.log("titre : ", location)
    console.log("titre : ", cuisine)
    console.log("titre : ", openingTime)
    console.log("titre : ", closingTime)
    console.log("titre : ", phone)
    console.log("titre : ", adress)
    console.log("titre : ", nombre_table)
    console.log("image : ", fileToUpload)
    let formData = new FormData();

    formData.append("image", fileToUpload, fileToUpload.name);

    return this.http.post(environment.base_url + "restaurants/add", formData);

  }


  Bloquer(_id : string){
    return this.http.get(environment.base_url+'restaurants/bloquer/'+_id)

  }


  Debloquer(_id : string){
    return this.http.get(environment.base_url+'restaurants/debloquer/'+_id)

  }





}


