import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameHistory } from 'src/app/common/gameHistory';
import { GameUnit } from 'src/app/common/gameUnit';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() gameUnits: GameUnit[] = [];
  public gameHistory?: GameHistory;

  constructor(private counterService: ScoreCounterService) {}

  ngOnInit(): void {
    console.log("dash init");
    this.gameHistory = this.counterService.getHistory();
  }

  countPoints(): void {
    this.gameUnits[0].points = 40;
  }

  get moveNumber(): number{
    return this.counterService.getMovesNumber();
  }

  get WinnerId(): number | undefined{
    return this.counterService.getWinnerId();
  }

  get history(): GameHistory {
    // console.log(this.counterService.gameHistory)
    return this.counterService.gameHistory;
  }
}
