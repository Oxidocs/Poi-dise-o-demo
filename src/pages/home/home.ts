import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RutasPage  } from '../rutas/rutas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  nextPage(){
    this.navCtrl.push(RutasPage);
  }

  }
