import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { UserListProvider } from '../../providers/user-list/user-list';
import {IndividualPage} from '../individual/individual';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
