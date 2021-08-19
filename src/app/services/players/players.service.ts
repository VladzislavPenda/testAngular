import { Injectable, OnDestroy} from '@angular/core';
import { PLAYERS } from 'src/app/common/mock-players';
import { Player } from 'src/app/common/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService implements OnDestroy{

  players: Player[] = [];

  constructor() {
    this.players = this.getPlayers() //I should ask about this
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  getPlayers(): Player[] {
    return PLAYERS;
  }

  takePlayers(): Player[]{
    return this.players;
  }

  removePlayer(index: number): void {
    this.players.splice(index, 1);
  }

  ngOnDestroy(){
  }
}


