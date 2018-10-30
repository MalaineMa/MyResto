import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as $ from "jquery";
/*
  Generated class for the MenusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenusProvider {

  private url: string 

  constructor(public http: HttpClient) {
    console.log('Hello MenusProvider Provider');
    this.url ="http://localhost/MyResto(site)/app.php";
  }


  getmenus(){
    return  this.http.get(this.url+"?action=getmenus")
   }

}
