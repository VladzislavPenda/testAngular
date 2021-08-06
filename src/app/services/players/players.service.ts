import { Injectable } from '@angular/core';
import { PLAYERS } from 'src/app/common/mock-players';
import { Player } from 'src/app/common/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS;
  }
}


