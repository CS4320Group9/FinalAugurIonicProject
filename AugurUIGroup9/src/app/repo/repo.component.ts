import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    let promise = new Promise( (resolve) =>
      this.http.get("http://augur.chaoss.io/api/unstable/repos").subscribe(data => {
      resolve(data);
    })).then(value => {
      //@ts-ignore
      value.forEach(val => {
        document.getElementById('content').innerHTML += '<p>' + val['repo_name'] + '</p>';
      })
    })
  }

  goHome() {
    this.router.navigateByUrl('/main');
  }

  onLogout(){
    this.router.navigateByUrl('');
  }
}
