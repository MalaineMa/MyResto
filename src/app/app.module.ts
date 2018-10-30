import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BookingPage } from '../pages/booking/booking';
import { GalleriePage } from '../pages/gallerie/gallerie';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { RecipePage } from '../pages/recipe/recipe';
import { Recipe2Page } from '../pages/recipe2/recipe2';
import { DessertPage } from '../pages/dessert/dessert';
import { DrinksPage } from '../pages/Drinks/drinks';
import { SaladsPage } from '../pages/salads/salads';
import { DinnerPage } from '../pages/dinner/dinner';
import { SnacksPage } from '../pages/snacks/snacks';

import { SearchPage } from '../pages/search/search';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientsProvider } from '../providers/clients/clients';
import { MenusProvider } from '../providers/menus/menus';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GalleriePage,
    BookingPage,
    AcceuilPage,
    RecipePage,
    SearchPage,
    Recipe2Page,
    DessertPage,
    DrinksPage,
    SaladsPage,
    DinnerPage,
    SnacksPage
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GalleriePage,
    BookingPage,
    AcceuilPage,
    RecipePage,
    SearchPage,
    Recipe2Page,
    DessertPage,
    DrinksPage,
    SaladsPage,
    DinnerPage,
    SnacksPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClientsProvider,
    MenusProvider
  ]
})
export class AppModule {}
