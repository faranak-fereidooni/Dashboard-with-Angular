import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { CalendarComponent } from './modules/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,

    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
