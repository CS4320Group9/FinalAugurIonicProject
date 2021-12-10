import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { RegistryService } from '../registryservice/registry.service';

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
        document.getElementById('content').innerHTML += '<a href=https://'  + val['url'] + '>' + val['repo_name'] + '</a> <button class="home-btn" (click)=addToFavorites(' 
        + val['repo_id'] +',' + val['repo_name'] +','+ val['url'] + ')>Add To Saved </button>' + '<br/>';
      })
    })
  }

  addToFavorites(id: number, name: string, url: string) {
    console.log("Called for " + name)
      if(this.registry.user != null){
        this.registry.savedRepos.push({
          repo_id: '',
          repo_name: '',
          repo_url: '',
          username: this.registry.user.username
        })
      }
  }

  goHome() {
    this.router.navigateByUrl('/main');
  }

  onLogout(){
    this.router.navigateByUrl('');
  }


}
