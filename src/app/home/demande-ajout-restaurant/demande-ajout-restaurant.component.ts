import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../models/categorie';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CategorieService} from '../../Service/categorie.service';
import {Demande} from '../../models/demande';
import {DemandeService} from '../../Service/demande.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-demande-ajout-restaurant',
  templateUrl: './demande-ajout-restaurant.component.html',
  styleUrls: ['./demande-ajout-restaurant.component.css']
})
export class DemandeAjoutRestaurantComponent implements OnInit {
  showModel()
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })


    Swal.fire({
      title: 'Vous etes sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui,Envoyer!!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Terminer!',
          'Demande Envoyée, nous vous enverrons une réponse merci',
          'success'
        )
        this.add()
        console.log(this.add())

      }
    })
  }
  demande = new Demande();
  fileSelected:File;

  listdemandes;
  id;
  nom_resto;
  email_respo;
  nom_respo;
  numero_telephone;
  longitude;
  latitude;
  mp;
  ville;
  adresse;
  image;
  nombre_table;
  fileToUpload: File = null;
  constructor(public router:Router , public http:HttpClient, public demsrv:DemandeService) {

  }



   getAllDemandes(){
    this.demsrv.getAllDemande().subscribe(data=>{
      console.log(data);
      this.listdemandes=data;
      console.log(data);
    })
  }

  ngOnInit() {
    this.getAllDemandes()

  }

  add(){
    this.demsrv.add(this.nom_resto,this.nom_respo,this.email_respo,this.numero_telephone,this.longitude,this.latitude,this.mp,this.ville,this.adresse,this.nombre_table,this.fileToUpload).subscribe(res=>{
      console.log(res)
    });
  }

  postMethod(files: FileList){
    this.fileToUpload = files.item(0);
    return false;
  }

  recuperer(id,nom_resto,nom_respo,numero_telephone,longitude,latitude,nombre_table,mp,ville,adresse,email_respo,image) {
    this.demande.id=id;
    this.demande.nom_resto=nom_resto;
    this.demande.nom_respo=nom_respo;
    this.demande.numero_telephone=numero_telephone;
    this.demande.longitude=longitude;
    this.demande.latitude=latitude;
    this.demande.nombre_table=nombre_table;
    this.demande.mp=mp;
    this.demande.ville=ville;
    this.demande.adresse=adresse;
    this.demande.email_respo=email_respo;
    this.demande.image=image;

  }


  OnUpdate(){
    const c=confirm("vous etes sur")
    if(!c){
      return;
    }
    else {
      this.demsrv.update(this.id,this.demande).subscribe(res=>{
        console.log(res);
        this.getAllDemandes();
      });

      this.demande.nom_resto=null;
      this.demande.nom_respo=null;
      this.demande.numero_telephone=null;
      this.demande.longitude=null;
      this.demande.latitude=null;
      this.demande.nombre_table=null;
      this.demande.mp=null;
      this.demande.ville=null;
      this.demande.adresse=null;
      this.demande.email_respo=null;
      this.demande.image=null;
    }

  }

  getFile($event){

    this.fileSelected=$event.target.files[0];
  }

}
