import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { RegistryService } from '../registryservice/registry.service';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient, private router: Router, private registry: RegistryService) { }
  ngOnInit() {
    let promise = new Promise( (resolve) =>
      this.http.get("http://augur.chaoss.io/api/unstable/repos").subscribe(data => {
      resolve(data);
    })).then(value => {
      //@ts-ignore
      value.forEach(val => {
        document.getElementById('content').insertAdjacentHTML('beforeend', '<a href="https://'  + val['url'] + '">' + val['repo_name'] + '</a> <button id="add' + val['repo_id'] + '">Add To Saved</button>' + '<br/>');
        var component = this;
        document.getElementById('add' + val['repo_id']).addEventListener('click', function() {
          component.addToFavorites(val['repo_id'], val['repo_name'], val['url']);
        });
      })
    })
  }

  goHome() {
    this.router.navigateByUrl('/main');
  }

  onLogout(){
    this.router.navigateByUrl('');
  }

  addToFavorites(id: number, name: string, url: string) {
    var matched = false;
    for (let i = 0; i < this.registry.savedRepos.length; i++)
      if (this.registry.savedRepos[i].repo_id == id)
        matched = true;
    if(this.registry.user != null && !matched){
      this.registry.savedRepos.push({
        repo_id: id,
        repo_name: name,
        repo_url: url,
        username: this.registry.user.username
      })
      console.log("Saved: ", this.registry.savedRepos);
    }
  }
}

