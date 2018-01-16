import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'Credentials',
  templateUrl: 'credentials.html'
})
export class Credentials {
  data1: any;

  constructor(public navCtrl: NavController, public storage: Storage) { }

  save(){
    // save data in localStorage, I don't need to send it to HomePage
    this.storage.set('credentials',this.data1);
    // go to home
    this.navCtrl.push(HomePage)
  }
}
