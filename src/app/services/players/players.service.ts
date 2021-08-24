import { Injectable } from '@angular/core';
import { PLAYERS } from 'src/app/common/mock-players';
import { PlayerInfo } from 'src/app/common/playerInfo';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private players: PlayerInfo[] = [];

  constructor() {
    this.players = this.getPlayers();
  }

  public addPlayer(player: PlayerInfo): void {
    this.players.push(player);
  }

  private getPlayers(): PlayerInfo[] {
    return PLAYERS;
  }

  public takePlayers(): PlayerInfo[]{
    return this.players;
  }

  public removePlayer(index: number): void {
    this.players.splice(index, 1);
  }
}


