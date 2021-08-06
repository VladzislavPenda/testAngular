import { Component, OnInit } from '@angular/core';
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

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }

}
