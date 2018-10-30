import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import {MenusProvider} from '../../providers/menus/menus';
import { RecipePage } from '../recipe/recipe';
import { Recipe2Page } from '../recipe2/recipe2';
import { DessertPage } from '../dessert/dessert';
import { DrinksPage } from '../Drinks/drinks';
import { SaladsPage } from '../salads/salads';
import { DinnerPage } from '../dinner/dinner';
import { SnacksPage } from '../snacks/snacks';



@Component({
  selector: 'page-gallerie',
  templateUrl: 'gallerie.html'
})
export class GalleriePage {

  categorys : string

  constructor(public navCtrl: NavController, private MenusProvider:MenusProvider) {
    

  }


  ngOnInit(){
    this.MenusProvider.getmenus().subscribe(
      data => {
      // this.categorys = data.menus;
      },
      error => {
        console.log(error)
      }
    )
 }

 openSearch(){
  this.navCtrl.push(SearchPage)
}

openBreakfast(){
  this.navCtrl.push(RecipePage)

}

openLunch(){
  this.navCtrl.push(Recipe2Page)

}

openDessert(){
  this.navCtrl.push(DessertPage)

}

openDrinks(){
  this.navCtrl.push(DrinksPage)

}

openSalads(){
  this.navCtrl.push(SaladsPage)

}


openDinner(){
  this.navCtrl.push(DinnerPage)

}


openSnacks(){
  this.navCtrl.push(SnacksPage)

}

}
