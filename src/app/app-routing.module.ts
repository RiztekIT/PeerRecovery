import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
 /*  {
    path: "",
    redirectTo: "starter",
    pathMatch: "full",
  }, */
  {
    path: "",
    loadChildren: () =>
      import("./pages/starter/starter.module").then((m) => m.StarterPageModule),
  },
  {
    path: "starter",
    loadChildren: () =>
      import("./pages/starter/starter.module").then((m) => m.StarterPageModule),
  },
  {
    path: "signIn",
    loadChildren: () =>
      import("./pages/sign-in/sign-in.module").then((m) => m.SignInPageModule),
  },
  {
    path: "signUp",
    loadChildren: () =>
      import("./pages/sign-up/sign-up.module").then((m) => m.SignUpPageModule),
  },

  {
    path: "onBoarding",
    loadChildren: () =>
      import("./pages/on-boarding/on-boarding.module").then(
        (m) => m.OnBoardingPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(
        (m) => m.HomePageModule
        ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./pages/home/home.module").then(
        (m) => m.HomePageModule
        ),
  },
  {
    path: "search",
    loadChildren: () =>
      import("./pages/search/search.module").then((m) => m.SearchPageModule),
  },

  {
    path: "doctorCardView",
    loadChildren: () =>
      import("./pages/doctor-card-view/doctor-card-view.module").then(
        (m) => m.DoctorCardViewPageModule
      ),
  },

  {
    path: "bookAppointment",
    loadChildren: () =>
      import("./pages/book-appointment/book-appointment.module").then(
        (m) => m.BookAppointmentPageModule
      ),
  },

  {
    path: "dateTime",
    loadChildren: () =>
      import("./pages/date-time/date-time.module").then(
        (m) => m.DateTimePageModule
      ),
  },

  {
    path: "appointmentList",
    loadChildren: () =>
      import("./pages/appointment-list/appointment-list.module").then(
        (m) => m.AppointmentListPageModule
      ),
  },

  {
    path: "cancelAppointment",
    loadChildren: () =>
      import("./pages/cancel-appointment/cancel-appointment.module").then(
        (m) => m.CancelAppointmentPageModule
      ),
  },
  {
    path: "healthTips",
    loadChildren: () =>
      import("./pages/health-tips/health-tips.module").then(
        (m) => m.HealthTipsPageModule
      ),
  },

  {
    path: "setting",
    loadChildren: () =>
      import("./pages/setting/setting.module").then((m) => m.SettingPageModule),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./pages/notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },

  {
    path: "buyMedicine",
    loadChildren: () =>
      import("./pages/buy-medicine/buy-medicine.module").then(
        (m) => m.BuyMedicinePageModule
      ),
  },

  {
    path: "chat",
    loadChildren: () =>
      import("./pages/chat-list/chat-list.module").then((m) => m.ChatListPageModule),
  },
  {
    path: "chat2",
    loadChildren: () =>
      import("./pages/chat/chat.module").then(
        (m) => m.ChatPageModule
      ),
  },
  {
    path: "appoinments",    
    loadChildren: () =>
      import("./pages/calendar/calendar.module").then(
        (m) => m.CalendarPageModule
      ),
  },
  {
    path: "appointment",
    loadChildren: () =>
      import("./pages/appointment/appointment.module").then(
        (m) => m.AppointmentPageModule
      ),
  },
  {
    path: "chatWithDoctor",
    loadChildren: () =>
      import("./pages/chat-with-doctor/chat-with-doctor.module").then(
        (m) => m.ChatWithDoctorPageModule
      ),
  },
  {
    path: 'appointment',
    loadChildren: () => import('./pages/appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'chat-users-list',
    loadChildren: () => import('./pages/chat-users-list/chat-users-list.module').then( m => m.ChatUsersListPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./pages/rewards/rewards.module').then( m => m.RewardsPageModule)
  },
  {
    path: 'reward',
    loadChildren: () => import('./pages/reward/reward.module').then( m => m.RewardPageModule)
  },
  {
    path: 'tracking',
    loadChildren: () => import('./pages/tracking/tracking.module').then( m => m.TrackingPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/call-users-list/call-users-list.module').then( m => m.CallUsersListPageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./pages/call/call.module').then( m => m.CallPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
