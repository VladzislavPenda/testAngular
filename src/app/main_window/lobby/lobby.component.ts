import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerInfo } from 'src/app/common/playerInfo';
import { PlayersService } from 'src/app/services/players/players.service';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyComponent implements OnInit, OnDestroy {
  public players: PlayerInfo[] = [];

  constructor(private playerService: PlayersService, private router: Router, private scoreCounter: ScoreCounterService) { }

  ngOnInit(): void {
    this.players = this.playerService.players;
  }

  goToCreatingPlayer(): void{
    this.router.navigate(['/create']);
  }

  deletePlayer(index: number): void{
    this.playerService.removePlayer(index);
  }

  startGame(): void{
    this.router.navigate(['/game']);
    this.scoreCounter.initGame();
  }

  ngOnDestroy(){
  }
}
