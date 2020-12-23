import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss'],
})
export class CallingComponent implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {}

  goToBack() {
    this.util.modalCtrl.dismiss();
    this.util.navCtrl.navigateBack('doctorInfo');
  }

}
