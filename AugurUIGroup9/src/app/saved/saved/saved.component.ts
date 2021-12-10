import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistryService } from 'src/app/registryservice/registry.service';
import { SavedRepo } from 'src/app/savedrepo/saved-repo';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {

  constructor(private database: AngularFireDatabase, private registry: RegistryService, private formBuilder: FormBuilder) { }

  

  ngOnInit() {
    if(this.registry.user != null){
      this.database.list<any>('saved').valueChanges().subscribe(data => {
          
      });
    }
  }

}
