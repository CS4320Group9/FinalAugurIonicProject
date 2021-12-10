import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import firebase from "firebase/compat";
import {User} from "../user/user";

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  users: Array<User> = [];
  user: User = null;

  constructor(private database: AngularFireDatabase) {

    this.database.list<User>('users').valueChanges().subscribe(data => {
      this.users = data;
    })

  }

  createUser(user: User) {
    this.database.list('users').push(user);
  }
}
