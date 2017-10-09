import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BtfwModule } from '../btfw/Btfw.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    BtfwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
