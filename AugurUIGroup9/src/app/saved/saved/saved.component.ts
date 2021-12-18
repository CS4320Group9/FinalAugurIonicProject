import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistryService } from 'src/app/registryservice/registry.service';
import { SavedRepo } from 'src/app/savedrepo/saved-repo';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {

  constructor(private database: AngularFireDatabase, private registry: RegistryService, private router: Router, private formBuilder: FormBuilder) { }

  savedRepos = [];
  

  ngOnInit() {
    // if(this.registry.user != null){
    //   this.database.list<SavedRepo>('saved').valueChanges().subscribe(data => {
    //     data.forEach(value => {
    //       if(value.username == this.registry.user.username){
    //           console.log("hit");
    //       }
    //     })

    //     console.log(this.registry.savedRepos)
    //   });
    // }
    var repos = this.registry.savedRepos;
    for (let i = 0; i < repos.length; i++) {
      document.getElementById('savedcontent').insertAdjacentHTML('beforeend', '<div id="entry' + i + '"><a href="https://'  + repos[i].repo_url + '">' + repos[i].repo_name + '</a> <button id="remove' + repos[i].repo_id + '">Remove from Saved</button>' + '</div>');
      var component = this;
        document.getElementById('remove' + repos[i].repo_id).addEventListener('click', function() {
          component.removeFromFavorites(i);
        });
    }
  }

  goHome() {
    this.router.navigateByUrl('/main');
  }

  onLogout(){
    this.router.navigateByUrl('');
  }

  removeFromFavorites(index: number) {
    this.registry.savedRepos.splice(index, 1);
    document.getElementById("entry" + index).remove();
  }
}
