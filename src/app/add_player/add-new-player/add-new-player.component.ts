import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/common/player';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.component.html',
  styleUrls: ['./add-new-player.component.css']
})
export class AddNewPlayerComponent implements OnInit {

  player: Player = {name: '', mail: ''};
  constructor(private playerService: PlayersService, private router: Router) { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    const navigationParams: string[] = [''];
    this.playerService.addPlayer(this.player);
    this.router.navigate(navigationParams);
  }
}
