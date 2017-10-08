import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BtfwModule } from '../btfw/Btfw.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent
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
