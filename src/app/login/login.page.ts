import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

    constructor(private googlePlus: GooglePlus, private navCtrl: NavController, private menu:MenuController){

    }

    doGoogleLogin() {

      this.googlePlus.login({
        'scopes': '', 
        'webClientId': '287303615764-5fcvokpnjreeub2r07qm7u0lqval35vm.apps.googleusercontent.com', 
        'offline': true 
      })
      .then(user =>{
          console.log("the value of user" + user.email + user.displayName) ;
      },
        error => {
          console.log(error);
      })   

      console.log("value of Google Login");


    }

    goMenuPage() {
      this.navCtrl.navigateRoot('/menu');
      this.navCtrl.navigateForward('/menu');

    }

}
