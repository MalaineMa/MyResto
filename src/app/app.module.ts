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
import { SearchPage } from '../pages/search/search';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GalleriePage,
    BookingPage,
    AcceuilPage,
    RecipePage,
    SearchPage

  ],
  imports: [
    BrowserModule,
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
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
