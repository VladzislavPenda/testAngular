import { Injectable, OnDestroy} from '@angular/core';
import { PLAYERS } from 'src/app/common/mock-players';
import { PlayerInfo } from 'src/app/common/playerInfo';

@Injectable({
  providedIn: 'root'
})
export class PlayersService implements OnDestroy{

  players: PlayerInfo[] = [];

  constructor() {
    this.players = this.getPlayers() //I should ask about this
  }

  addPlayer(player: PlayerInfo): void {
    this.players.push(player);
  }

  getPlayers(): PlayerInfo[] {
    return PLAYERS;
  }

  takePlayers(): PlayerInfo[]{
    return this.players;
  }

  removePlayer(index: number): void {
    this.players.splice(index, 1);
  }

  ngOnDestroy(){
  }
}


