import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ClientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientsProvider {

  private url: string 

  constructor(public http: HttpClient) {
    console.log('hey');

  }

  getClients(){
   return  this.http.get(this.url+"?action=getclients")
  }

}
