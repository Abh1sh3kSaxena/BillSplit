import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {profile} from '../crud/profile';
import { Header } from 'ionic-angular/navigation/nav-interfaces';

/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class CrudProvider {
  apiUrl = 'https://api.backand.com:443/1/objects/';
  profiles : profile[];
  constructor(public http: HttpClient) {
   
  }

  

  public getProfile() : Observable<profile[]>{
    var headers = this.getHeaders();
     return this.http.get<profile[]>(this.apiUrl+'/Profile',
     headers
    );
    
  }

  public addProfile(Email:string , FirstName:string , LastName : String ) {
    var headers = this.getHeaders();
    let postParams = {
      "Email": Email,
      "FirstName": FirstName,
      "LastName": LastName
    }
    this.http.post(this.apiUrl+'/Profile', postParams)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);// Error getting the data
    });
}

public removeProfile(Id:Number)
{
  var headers = this.getHeaders();
  this.http.get<profile[]>(this.apiUrl+'/Profile/'+Id,
  headers
 ).subscribe(data => {
  console.log(data['_body']);
 }, error => {
  console.log(error);// Error getting the data
});
}

private getHeaders() : Header{
  var headers = new Headers();
  headers.append('AnonymousToken','8d974ed8-8b1c-4fee-b3d1-569f872c549f');
  headers.append('App_name','bill5plitter' );
  return headers;
}
}
