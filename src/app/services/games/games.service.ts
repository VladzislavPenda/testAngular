import { Injectable } from '@angular/core';
import { GAMES } from 'src/app/common/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames() {
    return GAMES
  }
}
