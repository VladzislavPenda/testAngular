import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnDestroy{
  constructor(private router: Router, private scoreCounter: ScoreCounterService) { }

  newGame(){
    const navigationParams: string[] = ['/'];
    this.router.navigate(navigationParams);
  }

  ngOnDestroy(){
    this.scoreCounter.removeHistory();
  }

}
