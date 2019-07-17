import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Client} from '../../models/client';
import {ClientService} from '../../Service/client.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  fileToUpload: File = null;
  config: any;
   term;
  client = new Client();
  fileSelected:File;

  listclients;
  id ;
  nom;
  prenom;
  numero_telephone;
  email;
  password;
  image;
  sexe;
  adresse;



  


  constructor(private router:Router , private http:HttpClient, private clientsrv:ClientService) {
    this.getAllClients()
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,

    };
  }
    


  public getAllClients(){
    this.clientsrv.getAllClients().subscribe(data=>{
      console.log(data);
      this.listclients=data;
      console.log(data);
    })
  }

  ngOnInit() {
    
  }

  OnDelete(id){



    Swal.fire({
      title: 'Vous etes sure?',
      text: 'le client sera supprimer de la base données!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer',
      cancelButtonText: 'Non,'
    }).then((result) => {
      if (result.value) {


        this.clientsrv.delete(id).subscribe(res=>{
          console.log(res);
          Swal.fire(
            'Deleted!',
            'Le client effacé avec success.',
            'success'
          )
          this.getAllClients();
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }



  postMethod(files: FileList){
    this.fileToUpload = files.item(0);

    return false;

  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  OnUpdate(){

      this.clientsrv.update(this.id,this.client).subscribe(res=>{
        console.log(res);
        this.getAllClients();
      })

      this.client.nom=null;
      this.client.prenom=null;
      this.client.email=null;
      this.client.password=null;
      this.client.numero_telephone=null;
      this.client.adresse=null;
      this.client.sexe=null;
      this.client.adresse=null;



  }
  getFile($event){

    this.fileSelected=$event.target.files[0];
  }

}
