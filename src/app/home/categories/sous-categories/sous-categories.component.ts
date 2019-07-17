import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../Service/categorie.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sous-categories',
  templateUrl: './sous-categories.component.html',
  styleUrls: ['./sous-categories.component.css']
})
export class SousCategoriesComponent implements OnInit {

  id;
  listSousCat;
  categorie;
  constructor(private catServ : CategorieService  , private router:ActivatedRoute ,private http:HttpClient) {

    this.id=this.router.snapshot.params["id"];
  }

  ngOnInit() {


    this.catServ.getAllCategorieByID(this.id).subscribe(res=>{
      console.log(res)
      this.categorie=res;

    })
  }


}
