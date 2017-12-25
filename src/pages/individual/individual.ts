import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the IndividualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-individual',
  templateUrl: 'individual.html',
})
export class IndividualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  AddUser() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput(
      {
        type: 'text',
        placeholder: 'Name'
      }
    );

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        // this.testCheckboxOpen = false;
        // this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
}
