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
  data2: any;
  data3: any;

  constructor(public navCtrl: NavController, public storage: Storage) { }

  save(){
    // save data in localStorage, I don't need to send it to HomePage
    let dataObject = [this.data1, this.data2, this.data3];
    this.storage.set('credentials',dataObject);
    // go to home
    this.navCtrl.push(HomePage)
  }
}
