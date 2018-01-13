import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'Credentials',
  templateUrl: 'Credentials.html'
})
export class Credentials {
  data: any;
  
  constructor(public navCtrl: NavController, public storage: Storage) { }
  save(){
    this.navCtrl.push(HomePage, {
      data1: this.data
    })

    // save data in localStorage, I don't need to send it to HomePage
    this.storage.set('test',this.data);
  }
}
