import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {



  }

  ngOnInit() {}

  yourSavedData(){
    this.router.navigateByUrl("/saved");
  }
  viewRepositories(){
    this.router.navigateByUrl("/repo")

  }

  viewStatistics(){
    this.router.navigateByUrl('statistics');
  }
  addRepository(){
    this.router.navigateByUrl('requestadd');
  }

  onLogout() {
    this.router.navigateByUrl('');
  }
}
