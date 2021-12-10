import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistryService } from 'src/app/registryservice/registry.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {

  constructor(private database: AngularFireDatabase, private registry: RegistryService) { }

  ngOnInit() {
    if(this.registry.user != null){
      console.log("Not tnull");
    }
  }

}
