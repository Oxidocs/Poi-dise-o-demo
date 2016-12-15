import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Rutas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html'
})
export class RutasPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RutasPage Page');
  }

}
