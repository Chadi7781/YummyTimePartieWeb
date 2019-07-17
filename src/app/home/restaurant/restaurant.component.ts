import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Client} from '../../models/client';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ClientService} from '../../Service/client.service';
import {Restaurant} from '../../models/restaurant';
import {RestaurantService} from '../../Service/restaurant.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  fileToUpload: File = null;
  // @ViewChild("toggleTimepicker1") toggleTimepicker1: ElementRef;
  // @ViewChild("toggleTimepicker") toggleTimepicker: ElementRef;

  restaurant = new Restaurant();
//  time = {hour: 13, minute: 1};

  listerestaurant;
  config: any;

  datetime;
  id ;
  city;
  name;
  image;
  rating;
  lat;
  lng;
  location;
  cuisine;
  openStatus;
  openingTime;
  closingTime;

  phone;
  adress;
  imageList;
  verified;
  distance;
  nombre_table;

  constructor(private router:Router , private http:HttpClient, private restosrv:RestaurantService) {
    this.getAllRestaurants()
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,

  }}
  pageChanged(event){
    this.config.currentPage = event;
  }




  recuper(id,name,lat,lng,city,location,cuisine,openStatus,openingTime,closingTime,phone,adress,nombre_table){
    this.restaurant.id=id;
    this.restaurant.name=name;
    this.restaurant.city=city;
    this.restaurant.lat=lat;
    this.restaurant.lng=lng;
    this.restaurant.location=location;
    this.restaurant.cuisine=cuisine
    this.restaurant.openStatus=openStatus;
    this.restaurant.openingTime=openingTime;
    this.restaurant.closingTime=closingTime;
    this.restaurant.phone=phone;
    this.restaurant.adress=adress;
    this.restaurant.nombre_table=nombre_table;

  }



  getAllRestaurants(){
    this.restosrv.getAllRestaurants().subscribe(data=>{
      console.log(data);
      this.listerestaurant=data;
      console.log(data);
    })
  }

  ngOnInit() {

  }

  OnDelete(id){



    Swal.fire({
      title: 'Vous etes sure?',
      text: 'Cette restaurants aura retirer de la base de données!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {


        this.restosrv.delete(id).subscribe(res=>{
          console.log(res);
          Swal.fire(
            'Supprimé!',
            'Restaurant Supprimé.',
            'success'
          )
          this.getAllRestaurants();
        })


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulerَ',
          '',
          'error'
        )
      }
    })

  }
  add(){
    this.restosrv.add(this.restaurant.city,this.restaurant.name,this.restaurant.lat,this.restaurant.lng,this.restaurant.location,
      this.restaurant.cuisine,this.restaurant.openingTime,this.restaurant.closingTime,this.restaurant.phone,this.restaurant.adress,this.restaurant.nombre_table,this.fileToUpload).subscribe(res=>{
      console.log(res)
      this.getAllRestaurants();
      this.restaurant.city=null;
      this.restaurant.name=null;
      this.restaurant.lat=null;
      this.restaurant.lng=null;
      this.restaurant.location=null;
      this.restaurant.cuisine=null;
      this.restaurant.openingTime=null;
      this.restaurant.closingTime=null;
      this.restaurant.phone=null;
      this.restaurant.adress=null;
      this.restaurant.nombre_table=null;
    });
  }
  postMethod(files: FileList){
    this.fileToUpload = files.item(0);

    return false;

  }


  OnUpdate(){
      this.restosrv.update(this.id,this.restaurant).subscribe(res=>{
        console.log(res);
        this.getAllRestaurants();
      });

    this.restaurant.city=null;
    this.restaurant.adress=null;
    this.restaurant.lat=null;
    this.restaurant.lng=null;
    this.restaurant.location=null;
    this.restaurant.openStatus=null;
    this.restaurant.openingTime=null;
    this.restaurant.closingTime=null;
    this.restaurant.nombre_table=null;
    this.restaurant.cuisine=null;
    this.restaurant.phone=null;
  }

  Bloquer(id){

    this.restosrv.Bloquer(id).subscribe(res =>{
      this.getAllRestaurants() ;

      console.log('restaurant bloquer !!!')
      console.log(res);



    })
  }

  Debloquer(id){

    this.restosrv.Debloquer(id).subscribe(res =>{
      this.getAllRestaurants() ;

      console.log('restaurant bloquer !!!')
      console.log(res);


    })
  }

}
