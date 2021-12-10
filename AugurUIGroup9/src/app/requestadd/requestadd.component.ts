import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestadd',
  templateUrl: './requestadd.component.html',
  styleUrls: ['./requestadd.component.scss'],
})
export class RequestaddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  goHome() {
    this.router.navigateByUrl('main');
  }
}
