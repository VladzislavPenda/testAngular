import { Component, Input, OnInit } from '@angular/core';
import { GameUnit } from 'src/app/common/gameItem';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-throwing-darts',
  templateUrl: './throwing-darts.component.html',
  styleUrls: ['./throwing-darts.component.css']
})
export class ThrowingDartsComponent implements OnInit {

  @Input() gameUnits: GameUnit[] = []
  fakeArray = new Array(3);

  constructor(private scoreCounter: ScoreCounterService) { }

  ngOnInit(): void {
    // this.gameUnits = this.scoreCounter.gameUnits
  }


}
