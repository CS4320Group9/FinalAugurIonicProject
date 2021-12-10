import { Component } from '@angular/core';
import {AlertController} from "@ionic/angular";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home Page', url: '/main', icon: 'home'},
    { title: 'View Repository', url: '/repo', icon: 'git-branch'},
    { title: 'Saved Data', url: '/saved', icon: 'git-branch'},
    { title: 'Request', url: '/requestadd', icon: 'home' },
    { title: 'Logout', url: '/login', icon: 'home' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public alertController: AlertController) { }

  test(): void {
    this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle for alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });
  }
}
