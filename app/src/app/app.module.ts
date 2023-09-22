import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DoorComponent } from './components/door/door.component';
import { SkillPanelComponent } from './components/skill-panel/skill-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoorComponent,
    SkillPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
