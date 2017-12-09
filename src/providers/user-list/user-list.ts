//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import {user} from './user';
import { Observable } from 'rxjs';

/*
  Generated class for the UserListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserListProvider {
userDetails : user[]= [
  {name : 'Abhishek Saxena', mobileNumber : 7863279805 , isResponsibleParty : true , isChild : false , deviceAmount : 15 , taxAmount : 7.5, total:35},
  {name : 'Juhi Shrivas', mobileNumber : 7863279805 , isResponsibleParty : false , isChild : true , deviceAmount : 0 , taxAmount : 7.5, total:35}
];
  constructor() {
    console.log('Hello UserListProvider Provider');
  }
  getUser(): Observable<user[]> {
    return Observable.of(this.userDetails);
  }

}
