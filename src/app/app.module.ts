import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './main_window/lobby/lobby.component';
import { ChooseGameComponent } from './main_window/choose-game/choose-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    ChooseGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
