import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../Service/client.service';
import {ReservationService} from '../../Service/reservation.service';
import {RestaurantService} from '../../Service/restaurant.service';
import {OffreService} from '../../Service/offre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
listeclient;
listereservation;
listerestaurant;
listeoffre;
  constructor(private srvcclient:ClientService,private srvcreservat:ReservationService,
              private srvcrest:RestaurantService,private srvcoffre:OffreService) {
    this.allclient();
    this.getalloffre();
    this.getallreservation();
    this.getallrestaurant()
  }

  ngOnInit() {
  }

  allclient(){
    this.srvcclient.getAllClients().subscribe(res=>{
      console.log(res)
      this.listeclient=res
    })
  }
  getallreservation(){
    this.srvcreservat.getAllReservations().subscribe(res=>{
      this.listereservation = res
      console.log(res);
    })
  }
  getallrestaurant(){
    this.srvcrest.getAllRestaurants().subscribe(res=>{
      this.listerestaurant = res;
      console.log(res)
    })
  }
  getalloffre(){
    this.srvcoffre.getAllOffres().subscribe(res=>{
      this.listeoffre = res;
    })
  }
}
