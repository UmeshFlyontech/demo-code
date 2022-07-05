import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalComponent } from './festival/festival.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { HiringComponent } from './hiring/hiring.component';
import { WorkAnniversaryComponent } from './work-anniversary/work-anniversary.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FestivalComponent,
    BirthdayComponent,
    HiringComponent,
    WorkAnniversaryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
