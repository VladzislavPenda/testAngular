import { Component, OnInit } from '@angular/core';
import { GameUnit } from 'src/app/common/gameItem';
import { PlayersService } from 'src/app/services/players/players.service';
import { Player } from 'src/app/common/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameUnits: GameUnit[] = [];

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.playerService.players.forEach(element => {
      console.log(element)
      const gameUnit: GameUnit = {person: element, points: 501};
      this.gameUnits.push(gameUnit);
    });
  }

}
