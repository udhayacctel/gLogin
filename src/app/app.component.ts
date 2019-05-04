import { Component } from '@angular/core';

import { Platform, NavController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

 // rootUrl: any = '/login';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private navCtrl: NavController
  ) {

    this.navCtrl.navigateRoot('/login');
    this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {
         this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
  }
}
