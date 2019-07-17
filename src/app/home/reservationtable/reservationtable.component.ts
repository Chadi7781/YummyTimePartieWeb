import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../Service/reservation.service';
import {Reservation} from '../../models/reservation';

@Component({
  selector: 'app-reservationtable',
  templateUrl: './reservationtable.component.html',
  styleUrls: ['./reservationtable.component.css']
})
export class ReservationtableComponent implements OnInit {


  listeresvartion;
  reservation=new Reservation()
  id;
  nombrePersonne;
  date_reservation;
  nom_cl;

  constructor( private srvcres:ReservationService) {
    this.getall()
  }

  ngOnInit() {
  }
getall(){
    return this.srvcres.getAllReservations().subscribe(res=>{
      this.listeresvartion=res
      console.log(res)
    })
}


  OnDelete(id){
    const  c = confirm("vous etes sur")

    if (!c) {
      return;
    }else {
      this.srvcres.delete(id).subscribe(res=>{
        console.log(res);
        this.getall();
      })
    }
  }
  recuper(id,nombrePersonne,date_res){
    this.reservation.id=id;
    this.reservation.nombrePersonne=nombrePersonne;
    this.reservation.date_res=date_res;
  }
  OnUpdate(){
    const c=confirm("vous etes sur")
    if(!c){
      return;
    }
    else {
      this.srvcres.update(this.id,this.reservation).subscribe(res=>{
        console.log(res);
        this.getall();
      })
    }

  }

}
