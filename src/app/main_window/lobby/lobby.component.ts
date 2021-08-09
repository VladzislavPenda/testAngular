import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/common/player';
import { PlayersService } from 'src/app/services/players/players.service';
import { ChooseGameComponent } from '../choose-game/choose-game.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  players: Player[] = [];
  // choosedGame: string ='';

  constructor(private playerService: PlayersService, private router: Router) { }

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
  }
}
