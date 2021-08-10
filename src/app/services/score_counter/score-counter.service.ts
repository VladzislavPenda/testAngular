import { Injectable, SimpleChanges } from '@angular/core';
import { GameUnit } from 'src/app/common/gameItem';
import { Player } from 'src/app/common/player';
import { PlayersService } from '../players/players.service';
import { OnInit } from '@angular/core';
import { GameData } from 'src/app/common/gameData';

@Injectable({
  providedIn: 'root'
})
export class ScoreCounterService implements OnInit{

  gameUnits: GameUnit[] = []
  gameData: GameData[] = []
  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(1)
    this.playerService.players.forEach(element => {
      console.log(element)
      const gameUnit: GameUnit = {person: element, points: 501};
      this.gameUnits.push(gameUnit);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(1)
    this.playerService.players.forEach(element => {
      console.log(element)
      const gameUnit: GameUnit = {person: element, points: 501};
      this.gameUnits.push(gameUnit);
    });
  }

  getData(): void{
    return
  }
}
