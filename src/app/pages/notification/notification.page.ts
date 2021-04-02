import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notification:any = [
    {
      date: '26,Nov 2019',
      notification: [
        {
          img: '../../../assets/imgs/data/notification/notify1.png',
          title: 'Dr.Nick Adams',
          date: '5min ago',
          text: 'Doctor Cancel Your Appointment'
        }, {
          img: '../../../assets/imgs/data/notification/notify2.png',
          title: 'Dr.Kelly Gomez',
          date: '3 Hour ago',
          text: 'Change your appointment time please...'
        }, {
          img: '../../../assets/imgs/data/notification/notify3.png',
          title: 'Dr.Alex Griffin',
          date: '4 Hour ago',
          text: 'Book Appointment 11,Nov 2019 10:00am'
        }, {
          img: '../../../assets/imgs/data/notification/notify4.png',
          title: 'Dr.Fionna Foster',
          date: '4 Hour ago',
          text: 'Give 5 Star And good doctor I change...'
        },
      ]
    }, {
      date: '25,Nov 2019',
      notification: [
        {
          img: '../../../assets/imgs/data/notification/notify5.png',
          title: 'Dr.Amanda Clark',
          date: '5 Hour ago',
          text: 'Change your appointment time please...'
        }, {
          img: '../../../assets/imgs/data/notification/notify6.png',
          title: 'Dr.Kelly Gomez',
          date: '3 Hour ago',
          text: 'Cancel Appointment 11,Nov 2019 10:00am'
        }, {
          img: '../../../assets/imgs/data/notification/notify7.png',
          title: 'Dr.Alex Griffin',
          date: '4 Hour ago',
          text: 'Book Appointment 11,Nov 2019 10:00am'
        }, {
          img: '../../../assets/imgs/data/notification/notify8.png',
          title: 'Dr.Fionna Foster',
          date: '4 Hour ago',
          text: 'Give 5 Star And good doctor I change...'
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
