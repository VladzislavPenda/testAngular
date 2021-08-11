import { Component, OnInit } from '@angular/core';
import { GameUnit } from 'src/app/common/gameItem';
import { PlayersService } from 'src/app/services/players/players.service';
import { Player } from 'src/app/common/player';
import { GameData } from 'src/app/common/gameData';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameUnits: GameUnit[] = [];
  gameData: GameData[] = []

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.playerService.players.forEach(element => {
      const gameUnit: GameUnit = {person: element, points: 501};
      const gameDataElement: GameData = {receivedPoints: [0, 0, 0]}
      this.gameUnits.push(gameUnit);
      this.gameData.push(gameDataElement);

    });
    console.dir(this.gameUnits)
  }

  countPoints(): void {
    this.gameUnits[0].points = 40;
  }

}
