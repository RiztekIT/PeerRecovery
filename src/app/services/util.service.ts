import { Injectable } from '@angular/core';
import { NavController, MenuController, ModalController, PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
  ) { }
}
