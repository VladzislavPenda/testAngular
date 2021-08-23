import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScoreCounterService]
})
export class GameComponent{

  constructor(private router: Router) {
  }

  newGame(){
    this.router.navigate(['/']);
  }
}
