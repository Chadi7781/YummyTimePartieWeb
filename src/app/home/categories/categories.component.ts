import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CategorieService} from '../../Service/categorie.service';
import {Categorie} from '../../models/categorie';
import {environment} from '../../../environments/environment';
import {ClientService} from '../../Service/client.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categorie = new Categorie();
  config: any;

  listcategories;
  id;
  titre;
  image;
  cat = new Categorie();

  fileToUpload: File = null;
  constructor(private router:Router , private http:HttpClient, private catsrv:CategorieService) {
    this.getAllCategories()
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,

    };

  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getAllCategories(){
    this.catsrv.getAllCategories().subscribe(data=>{
      console.log(data);
      this.listcategories=data;
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


        this.catsrv.delete(id).subscribe(res=>{
          console.log(res);
          Swal.fire(
            'Deleted!',
            'Le client effacé avec success.',
            'success'
          )
           this.getAllCategories();
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
  add(){
    this.catsrv.add(this.categorie.titre,this.fileToUpload).subscribe(res=>{
      console.log(res)
      this.getAllCategories();
      this.categorie.titre=null;
      this.categorie.image=null;
    });
  }

  postMethod(files: FileList){
    this.fileToUpload = files.item(0);
    return false;
  }

  recuper(id,titre,image){
    this.categorie.id=id;
    this.categorie.titre=titre;
    this.image=image;

  }


  OnUpdate(){

      this.catsrv.update(this.id,this.categorie).subscribe(res=>{
        console.log(res);
        this.getAllCategories();
      });

      this.categorie.titre=null;
      this.categorie.image=null;
    }





  ById(id){
    return this.catsrv.getAllCategorieByID(this.id).subscribe(res =>{
      console.log('okkk ', res)
    })
  }
}
