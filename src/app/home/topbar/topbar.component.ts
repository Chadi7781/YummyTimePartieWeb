import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../Service/admin.service';
import {ResponsableService} from '../../Service/responsable.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
i;
  responsabletab ;
  objj
  constructor(private router:Router, private adminServ : AdminService ,private responServ :ResponsableService) { }

  ngOnInit() {
    console.log('chadiiiiiiiiiiiii')
    this.getAllUser();
  }

  deconnexion(){
    localStorage.clear()
    this.router.navigate([''])
  }

 getAllUser(){
    return this.responServ.getAllFalse().subscribe(res =>{
      console.log(res);
      console.log(res['length'])
      this.responsabletab = res;
      for (this.i =0;this.i <= this.responsabletab.length; this.i ++){
        this.objj = res[this.i]['nom'];
        console.log( res[this.i]['nom']);
      }
    })
 }
getApprouver(id){

    this.adminServ.getApprouver(id).subscribe(res =>{
      console.log('approuver okkk !!!')
window.location.reload();
      console.log(res);


    })
}

  OnDelete(id){

    Swal.fire({
      title: 'Vous etes sure?',
      text: 'Refuser la creation du compte  ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {


        this.responServ.delete(id).subscribe(res=>{
          console.log(res);
          Swal.fire(
            'Supprimée!',
            '',
            'success'
          )
window.location.reload()
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          '',
          'error'
        )
      }
    })
  }

}
