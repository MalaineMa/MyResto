import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { BookingPage } from '../booking/booking';
import { GalleriePage } from '../gallerie/gallerie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  open1(){
    this.navCtrl.push(GalleriePage)
  }

  open2(){
    this.navCtrl.push(BookingPage)
  }

}
