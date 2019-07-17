import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../Service/admin.service';
import Swal from 'sweetalert2'
import {invalid} from '@angular/compiler/src/render3/view/util';
import {UserService} from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  loading = false;
  loginForm: FormGroup;
  submit = false;

  email
  password ;
  constructor(private router: Router, private formbuilder: FormBuilder, private adminServ: UserService) {
  }

  ngOnInit() {


    this.loginForm = this.formbuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get f() {

    return this.loginForm.controls;
  }

  go() {
    this.submit = true;

    if (this.loginForm.invalid) {

      return
    }
    this.adminServ.login(this.loginForm.value['email'], this.loginForm.value['password']).subscribe(res => {

        console.log(res);
        console.log(this.loginForm.value['email']);
        console.log(this.loginForm.value['password']);

        if(JSON.parse(JSON.stringify(res)).status==="succes") {
          localStorage.setItem('token', JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data.token)));
          localStorage.setItem('user', JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user));
          localStorage.setItem("role", JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user)).role)).nom)
          localStorage.setItem('var', '1');
          this.router.navigate(['home'])


        }else {

        Swal.fire('Erreur', 'Merci de vérifier votre email et password','error')

        }
        });


  }
}
