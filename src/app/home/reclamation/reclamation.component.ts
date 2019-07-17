import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../models/reservation';
import {ReservationService} from '../../Service/reservation.service';
import {Reclamation} from '../../models/reclamation';
import {ReclamationService} from '../../Service/reclamation.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  listreclamation;
  reclamation=new Reclamation()
  id;
  titre;
  desc_rec;
  date_rec;

  constructor( private srvrec:ReclamationService) {
    this.getall()
  }

  ngOnInit() {
  }
  getall(){
    return this.srvrec.getAllReclamation().subscribe(res=>{
      this.listreclamation=res
      console.log(res)
    })
  }
  OnDelete(id){
    Swal.fire({
      title: 'Vous etes sure?',
      text: 'la réclamation sera supprimer de la base données!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer',
      cancelButtonText: 'Non,'
    }).then((result) => {
      if (result.value) {


        this.srvrec.delete(id).subscribe(res=>{
          console.log(res);
          Swal.fire(
            'Deleted!',
            'La réclamation effacé avec success.',
            'success'
          )
          this.getall();
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          '',
          'error'
        )
      }
    })

  }


  recuper(id,titre,desc_rec,date_rec){
    this.reclamation.id=id;
    this.reclamation.titre=titre;
    this.reclamation.desc_rec=desc_rec;
    this.reclamation.date_rec=date_rec;
  }
  OnUpdate(id ){

      this.srvrec.update(id,this.reclamation).subscribe(res=>{
        console.log(res);
        this.getall();
      })
    }

  }

