import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAdmin() {

    return this.http.get(environment.base_url + "admin/all");
  }


  getApprouver(_id : string){

    return this.http.get(environment.base_url+'admin/approuver/'+ _id)

  }

}
