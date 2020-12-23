import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  date:any = [
    {
      date: 'Today, 1 Nov',
      availableSlot: '9',
      selected: true,
    }, {
      date: 'Tomorrow, 2 Nov',
      availableSlot: '9',
      selected: false
    }, {
      date: 'Monday, 3 Nov',
      availableSlot: '9',
      selected: false
    }
  ];
  timeSlots:any = {
    morning : [
      {
        time: '10:00 am',
        selected: false,
        available: false
      },{
        time: '10:30 am',
        selected: true,
        available: true
      },{
        time: '11:00 am',
        selected: false,
        available: false
      },{
        time: '11:30 am',
        selected: false,
        available: false
      }
    ],
    afternoon: [
      {
        time: '12:00 pm',
        selected: false,
        available: true
      },{
        time: '12:30 am',
        selected: false,
        available: true
      },{
        time: '1:00 am',
        selected: false,
        available: false
      }
    ],
    evening: [
      {
        time: '05:00 pm',
        selected: false,
        available: true
      },{
        time: '05:30 pm',
        selected: false,
        available: false
      },{
        time: '06:00 pm',
        selected: false,
        available: true
      },{
        time: '06:30 pm',
        selected: false,
        available: true
      }
    ],
    night: [
      {
        time: '07:00 pm',
        selected: false,
        available: true
      },{
        time: '07:30 pm',
        selected: false,
        available: true
      },{
        time: '08:00 pm',
        selected: false,
        available: false
      },{
        time: '08:30 pm',
        selected: false,
        available: true
      }
    ],
  }
  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  async onSlotSelect(selectedTime:any) {
    await this.timeSlots.morning.forEach(element => {
      element.selected = false;
    });
    await this.timeSlots.afternoon.forEach(element => {
      element.selected = false;
    });
    await this.timeSlots.evening.forEach(element => {
      element.selected = false;
    });
    await this.timeSlots.night.forEach(element => {
      element.selected = false;
    });
    selectedTime.selected = await true;
  } 

  async onDateSelect(selectedDate:any) {
    await this.date.forEach(element => {
      element.selected = false
    });
    selectedDate.selected = await true;
  }

  goToPayment() {
    this.util.navCtrl.navigateForward('payment')
  }

}
