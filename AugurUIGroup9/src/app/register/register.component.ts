import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistryService} from "../registryservice/registry.service";
import {User} from "../user/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;

  constructor(private router: Router,private formBuilder: FormBuilder, private registry: RegistryService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

    //Function to get values
    get formControls() {

      return this.registerForm.controls;

    }

  //fire base code goes here
  register() {
    this.isSubmitted = true;
    if(this.registerForm.invalid) {
      return;
    }
    this.router.navigateByUrl('');
  }

  login() {
    this.router.navigateByUrl('');
  }

  createAccount() {
    let user: User = {
      first: this.registerForm.value.firstname,
      last: this.registerForm.value.lastname,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }


    this.registry.createUser(user);
  }
}
