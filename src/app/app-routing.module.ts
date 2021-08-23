import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './main_window/lobby/lobby.component';
import { AddNewPlayerComponent } from './add_player/add-new-player/add-new-player.component';
import { GameComponent } from './game/game/game.component';

const routes: Routes = [
  {path: "", component: LobbyComponent},
  {path: "create", component: AddNewPlayerComponent },
  {path: "game/:id", component: GameComponent},
  // {path: "game/301", component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
