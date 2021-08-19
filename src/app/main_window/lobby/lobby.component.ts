import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/common/player';
import { PlayersService } from 'src/app/services/players/players.service';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';
import { ChooseGameComponent } from '../choose-game/choose-game.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  // choosedGame: string ='';

  constructor(private playerService: PlayersService, private router: Router, private scoreCounter: ScoreCounterService) { }

  ngOnInit(): void {
    this.players = this.playerService.players;
  }

  goToCreatingPlayer(): void{
    const navigationParams: string[] = ['/create'];
    this.router.navigate(navigationParams);
  }

  deletePlayer(index: number): void{
    this.playerService.removePlayer(index);
  }

  // choosingGame(){

  // }

  startGame(): void{
    const navigationParams: string[] = ['/game'];
    this.router.navigate(navigationParams);
    this.scoreCounter.initGame();
  }

  ngOnDestroy(){
    console.log("lobby destroyed");
  }
}
