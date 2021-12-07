import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistryService} from "../registryservice/registry.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  loggedIn = false;

  constructor(private router: Router,private formBuilder: FormBuilder, private registry: RegistryService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //Function to get values
  get formControls() {

    return this.loginForm.controls;

  }

  //fire base code to check login goes here
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    this.registry.users.forEach(user => {
      if(user.username == this.loginForm.value.username && user.password == this.loginForm.value.password){
        this.router.navigateByUrl('/main');
        this.loggedIn = true;
      }
    })
    if(!this.loggedIn) {
      alert("Invalid Login Information Entered");
    }


  }
  register(){
    this.router.navigateByUrl('/register');
  }
}
