import { Component, OnInit } from '@angular/core';
import {Menu} from '../../models/menu';
import {MenuService} from '../../Service/menu.service';
import {OffreService} from '../../Service/offre.service';
import {Offre} from '../../models/offre';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  listOffres;

  offre = new Offre()
  titre;
  id;
  image;
  desc_off;
  date_expiration;
  fileToUpload: File = null;



  constructor(private srvoff: OffreService) {
    this.getAllOffres();
  }

  ngOnInit() {
  }

  getAllOffres() {
    return this.srvoff.getAllOffres().subscribe(res => {
      this.listOffres = res
      console.log(res)
    });
  }


  postMethod(files: FileList){
    this.fileToUpload = files.item(0);

    return false;

  }

  add(){
    this.srvoff.add(this.offre.titre,this.fileToUpload,this.offre.desc_off,this.offre.date_expiration).subscribe(res=> {

      console.log("gggg")

      console.log(res)
      this.getAllOffres();
      this.offre.titre=null;
      this.offre.desc_off=null;
      this.offre.date_expiration=null;
    });
  }

  OnDelete(id) {
    const c = confirm("vous etes sur")

    if (!c) {
      return;
    } else {
      this.srvoff.delete(id).subscribe(res => {
        console.log(res);
        this.getAllOffres();
      })
    }
  }

  recuper(id, titre, image, desc_off, date_expiration) {
    this.offre.id = id;
    this.offre.titre = titre;
    this.offre.image = image;
    this.offre.desc_off = desc_off;
    this.offre.date_expiration = date_expiration;


  }

  OnUpdate(){
    const c=confirm("vous etes sur")
    if(!c){
      return;
    }
    else {
      this.srvoff.update(this.id,this.offre).subscribe(res=>{
        console.log(res);
        this.getAllOffres();
      })


      this.offre.titre=null;
      this.offre.desc_off=null;
      this.offre.date_expiration=null;
    }

  }
}
