import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';


@Component({
  selector: 'app-result',
  templateUrl: 'result.page.html',
  styleUrls: ['result.page.scss'],
})
export class ResultPage {

    constructor(){

    }

    resultPage() {
     

        console.log("I am in the result page");
    }

}
