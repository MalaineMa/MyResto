import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BookingPage } from '../pages/booking/booking';
import { GalleriePage } from '../pages/gallerie/gallerie';
//import { AcceuilPage } from '../pages/acceuil/acceuil';
import { RecipePage } from '../pages/recipe/recipe';
import { Recipe2Page } from '../pages/recipe2/recipe2';
import { DessertPage } from '../pages/dessert/dessert';
import { DrinksPage } from '../pages/Drinks/drinks';
import { SaladsPage } from '../pages/salads/salads';
import { DinnerPage } from '../pages/dinner/dinner';
import { SnacksPage } from '../pages/snacks/snacks';

import { SearchPage } from '../pages/search/search';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, icon :"md-home" },
      //{ title: 'Accueil', component: AcceuilPage, icon :"md-apps" },
      { title: 'Gallerie', component: GalleriePage, icon :"md-photos" },
      { title: 'Booking', component: BookingPage, icon :"md-bookmarks" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
