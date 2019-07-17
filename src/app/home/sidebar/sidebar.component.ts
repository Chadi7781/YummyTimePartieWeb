import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../Service/admin.service';
import {Admin} from '../../models/admin';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  adminvalue;
  admin=new Admin();
  email;
  password;
  role ;
user ;
  constructor(private srvAdm:AdminService) {

    this.role = localStorage.getItem('role')
    console.log(this.role)
  }


  ngOnInit() {

    this.user =JSON.parse(localStorage.getItem('user'))
    console.log(this.user) ;

    this.getall();
  }

  getall(){
    return this.srvAdm.getAdmin().subscribe(res=>{
      this.adminvalue=res
      console.log(res)
    })
  }
  recupe(email,password){
    this.admin.email=email;
    this.admin.password=password;

  }
}
