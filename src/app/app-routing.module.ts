import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';
import { FestivalComponent } from './festival/festival.component';
import { HiringComponent } from './hiring/hiring.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkAnniversaryComponent } from './work-anniversary/work-anniversary.component';

const routes: Routes = [
  {
    path: 'birthday',
    component: BirthdayComponent
  },
  {
    path: 'festival',
    component: FestivalComponent
  },
  {
    path: 'hiring',
    component: HiringComponent
  },
  {
    path: 'work-anniversary',
    component: WorkAnniversaryComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
