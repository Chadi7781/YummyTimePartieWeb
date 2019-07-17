import { Component, OnInit } from '@angular/core';
import {DemandeAjoutRestaurantComponent} from '../demande-ajout-restaurant/demande-ajout-restaurant.component';
import {Demande} from '../../models/demande';
import {DemandeService} from '../../Service/demande.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-traiterdemande',
  templateUrl: './traiterdemande.component.html',
  styleUrls: ['./traiterdemande.component.css']
})
export class TraiterdemandeComponent implements OnInit {


  D=new DemandeAjoutRestaurantComponent(this.router,this.http,this.DmS);
  constructor(private router:Router,private http:HttpClient,private DmS:DemandeService) { }

  ngOnInit() {
    this.D.getAllDemandes();
    console.log(this.D.getAllDemandes());

  }

}

