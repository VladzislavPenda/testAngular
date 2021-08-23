import { Injectable, OnDestroy } from '@angular/core';
import { GAMES } from 'src/app/common/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService{

  public selectedGame: number = 0;
  constructor() { }

  getGames() {
    return GAMES;
  }

  selectGame(gameName: number){
    this.selectedGame=gameName;
  }
}
