import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Credentials } from '../Credentials/Credentials';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
 
  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams , public storage: Storage) {
    //Get data from LocalStorage, I don't need to get it from credentials.
    this.storage.get('credentials').then((val) => {
          this.createdCode = val;
    });
   }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
  goToCredentialsPage(){
    this.navCtrl.push(Credentials);
  }
 
}