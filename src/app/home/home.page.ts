import { Component } from '@angular/core';
import { NavController, MenuController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu:MenuController){

  }
  openMenu(){
    console.log("the value in OpenMenu");
    this.menu.toggle();
  }
}
