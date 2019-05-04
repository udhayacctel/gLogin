import { Component } from '@angular/core';
import { NavController, MenuController} from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html'
})
export class MenuPage {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'list'
    },
  ];

  constructor(private navCtrl:NavController, private menu:MenuController) {

      console.log("coming to Menu constructor");
      this.menu.enable(true, 'first');
      this.menu.open('first');
      this.setMain_page();  
   

  

  //    this.router.navigate(["/login"]);
  }

  
  ngOnInit() {
 //   this.router.navigate(["/login"]);
  }

  setMain_page() {
    this.navCtrl.navigateForward('/home');
    console.log("coming here to load the mainPage")

  }

 }
