import {Component, OnInit} from '@angular/core';
import {ReclamationService} from '../Service/reclamation.service';
import {ReservationService} from '../Service/reservation.service';
import {formatDate} from '@angular/common';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.component.html',
  styleUrls: ['./reclamer.component.css']
})
export class ReclamerComponent implements OnInit {
  listrec;
  listReservation;
  titre;
  date_rec;
  description_rec;
  id;

  constructor(private srvcrec: ReclamationService, private  srvReservation: ReservationService) {
    this.getAll();


  }

  getAll() {
    this.srvReservation.getAllReservations().subscribe(data => {
      console.log(data);
      this.listReservation = data;
      console.log(data);
    });

  }


  select(e) {

    console.log('id', e.target.value)

    this.id = e.target.value;



  }

  add() {


    var today = new Date();
    //split
    var returnDate = "";

    var dd = today.getDate();
    var mm = today.getMonth() + 1; //because January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      returnDate += `0${dd}/`;
    } else {
      returnDate += `${dd}/`;
    }

    if (mm < 10) {
      returnDate += `0${mm}/`;
    } else {
      returnDate += `${mm}/`;
    }

    returnDate += yyyy;


    this.srvcrec.addReclamation({
      'titre': this.titre,
      'description_rec': this.description_rec,
      'date_rec': ""+returnDate,
      'client': this.id


    }).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
