import { Injectable } from '@angular/core';
import { GAMES } from 'src/app/common/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  selectedGame: number = 0;
  constructor() { }

  getGames() {
    return GAMES
  }

  SelectGame(gameName: number){
    this.selectedGame=gameName;
  }
}
