import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import construct = Reflect.construct;
import {Router} from '@angular/router';
import {UserService} from '../Service/user.service';
import {MustMatch} from '../_helpers/must-match.validator';
import {RestaurantService} from '../Service/restaurant.service';
import {ResponsableService} from '../Service/responsable.service';
import {Responsable} from '../models/responsable';
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup;
  submit=false;
  Responsable;
  data ;
  constructor( private router :Router , private  formbuilder:FormBuilder , private rest:ResponsableService) { }

  ngOnInit() {

    this.registerForm = this.formbuilder.group({
        nom: ["", Validators.required],
        nom_resto: ["", Validators.required],
        numero_telephone: ["", Validators.required],
        adress: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    }
  )
    ;
  }

  //convience  getter for easy access to form fields
  get f(){

    return this.registerForm.controls;
  }

  go(){
    this.submit=true;

    const data= {
      nom : this.registerForm.value['nom'],
      numero_telephone : this.registerForm.value['numero_telephone'],
      email : this.registerForm.value['email'],
      password : this.registerForm.value['password'],
      nom_resto : this.registerForm.value['nom_resto'],
      adress : this.registerForm.value['adress'],

    }



    // stop here if form is invalid
    if(this.registerForm.invalid){
      return;
    }
   this.rest.add(data).subscribe(res=>{

     console.log("add")
     Swal.fire(
       'Demande ',
       'Votre register sera traiter par admin:)',
       'success'
     )
     this.Responsable=res;
     this.submit=false;
     this.registerForm.reset();
   })

    console.log("OKAY");


  }

}




