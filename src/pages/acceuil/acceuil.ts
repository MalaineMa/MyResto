import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';



@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html'
})
export class AcceuilPage {



  constructor(public navCtrl: NavController) {

  }

  openSearch(){
    this.navCtrl.push(SearchPage)}

}
