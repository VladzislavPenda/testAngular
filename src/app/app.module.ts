import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './main_window/lobby/lobby.component';
import { ChooseGameComponent } from './main_window/choose-game/choose-game.component';
import { AddNewPlayerComponent } from './add_player/add-new-player/add-new-player.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game/game/game.component';
import { ThrowingDartsComponent } from './game/throwing-darts/throwing-darts.component';
import { DashboardComponent } from './game/dashboard/dashboard.component';
import { PlayingUnitsComponent } from './game/playing-units/playing-units.component';
import { UnitComponent } from './game/unit/unit.component';
import { PointsCustomInputComponent } from './game/points-custom-input/points-custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    ChooseGameComponent,
    AddNewPlayerComponent,
    LogoComponent,
    GameComponent,
    ThrowingDartsComponent,
    DashboardComponent,
    PlayingUnitsComponent,
    UnitComponent,
    PointsCustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
