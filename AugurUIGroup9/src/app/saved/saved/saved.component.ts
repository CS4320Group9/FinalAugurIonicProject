import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistryService } from 'src/app/registryservice/registry.service';
import { SavedRepo } from 'src/app/savedrepo/saved-repo';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {

  constructor(private database: AngularFireDatabase, private registry: RegistryService, private formBuilder: FormBuilder) { }

  savedRepos = [];
  

  ngOnInit() {
    if(this.registry.user != null){
      this.database.list<SavedRepo>('saved').valueChanges().subscribe(data => {
        data.forEach(value => {
          if(value.username == this.registry.user.username){
              this.savedRepos.push(value)
          }
        })

        console.log(this.savedRepos)
      });
    }
  }

}
