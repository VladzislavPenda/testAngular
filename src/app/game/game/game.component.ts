import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GameUnit } from 'src/app/common/gameUnit';
import { PlayersService } from 'src/app/services/players/players.service';
import { GameData } from 'src/app/common/gameData';
import { Router } from '@angular/router';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy{

  gameUnits: GameUnit[] = [];
  gameData: GameData[] = [];


  constructor(private playerService: PlayersService, private router: Router, private scoreCounter: ScoreCounterService) { }

  ngOnInit(): void {
    this.playerService.players.forEach(element => {
      const gameUnit: GameUnit = {person: element.name, points: 501};
      this.gameUnits.push(gameUnit);
    });
  }

  countPoints(): void {
    this.gameUnits[0].points = 40;
  }

  newGame(){
    const navigationParams: string[] = ['/'];
    this.router.navigate(navigationParams);
  }

  ngOnDestroy(){
    this.scoreCounter.removeHistory();
  }

}
