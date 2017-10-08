import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component'
import { TitleBarComponent } from './title-bar/title-bar.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenBelowLarge } from './directives/screen-below-large.directive'
import { ScreenLarge } from './directives/screen-large.directive'

import { FrameworkConfigService } from '../btfw/services/framework-config.service';
import { ScreenService } from '../btfw/services/screen.service';
import { MenuService } from '../btfw/services/menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLarge,
    ScreenLarge
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class BtfwModule { }
