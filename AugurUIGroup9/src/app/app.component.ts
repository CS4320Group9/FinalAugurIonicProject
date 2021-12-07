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
    { title: 'Request', url: 'requestadd', icon: 'home' },
    { title: 'Logout', url: 'logout', icon: 'home' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
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
