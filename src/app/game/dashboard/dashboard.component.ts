import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameHistory } from 'src/app/common/gameHistory';
import { PlayerInfo } from 'src/app/common/playerInfo';
import { PlayersService } from 'src/app/services/players/players.service';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public gameHistory?: Observable<GameHistory>

  constructor(private counterService: ScoreCounterService, private playersService: PlayersService) {}

  ngOnInit(): void {
    console.log("dash init");
    this.gameHistory = this.counterService.gameHistory;
  }

  getPlayers(): PlayerInfo[]{
    return this.playersService.players;
  }

  get moveNumber(): number{
    return this.counterService.getMovesNumber();
  }

  get WinnerId(): number | undefined{
    return this.counterService.getWinnerId();
  }
}
