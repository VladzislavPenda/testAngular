import { Injectable, SimpleChanges } from '@angular/core';
import { GameUnit } from 'src/app/common/gameUnit';
import { Player } from 'src/app/common/player';
import { PlayersService } from '../players/players.service';
import { OnInit } from '@angular/core';
import { GameData } from 'src/app/common/gameData';
import { GameHistory } from 'src/app/common/gameHistory';

@Injectable({
  providedIn: 'root'
})
export class ScoreCounterService{

  gameUnits: GameUnit[] = []
  gameHistory: GameHistory[] = []
  // gameData: GameData[] = []
  constructor(private playerService: PlayersService) {
    this.playerService.players.forEach(element =>{
      // console.log(element)
      const gameHistory: GameHistory = {playerName: element.name, points: [], pointsRemaining: 501}
      this.gameHistory.push(gameHistory)
    })
   }

  getData(): void{
    return
  }

  count(data: GameData[], playerName: string): void{
    // console.log("Hi!")
    // console.log(this.gameUnits)
    // console.log(this.gameHistory)
    // console.log(data)
  }
}
