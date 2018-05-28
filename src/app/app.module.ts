import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebglComponent } from './webgl/webgl.component';
import { WebglService } from './webgl/webgl.service';
import { UiComponent } from './ui/ui.component';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui/ui-sidebar-right/ui-sidebar-right.component';
import { MainAnimationsComponent } from './animations/main-animations/main-animations.component';


@NgModule({
  declarations: [
    AppComponent,
    WebglComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    MainAnimationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebglService],
  bootstrap: [AppComponent]
})
export class AppModule { }
