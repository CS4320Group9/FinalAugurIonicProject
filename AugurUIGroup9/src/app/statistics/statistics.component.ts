import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('main');
  }

  logout() {
    this.router.navigateByUrl('');
  }
}
