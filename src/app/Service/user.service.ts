import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  update(user:User){

    this.http.put(environment.base_url+"users/update",user);

 }

  delete(id){

    this.http.delete(environment.base_url+"users/delete?id="+id);
  }

  getAlluser(){

    return this.http.get(environment.base_url+"users/all");
  }



  login(email , password){

    return this.http.post(environment.base_url+'users/auth', {email : email , password : password})
  }
}
