import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserListProvider } from '../../providers/user-list/user-list';
import { user } from '../../providers/user-list/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userlist: user[];
  constructor(public navCtrl: NavController, userList: UserListProvider) {
      this.newFunction(userList);
      console.log(this.userlist[0].name);
  }
    private newFunction(userList: UserListProvider) {
        userList.getUser().subscribe(data =>  this.userlist = data);
    }
}
