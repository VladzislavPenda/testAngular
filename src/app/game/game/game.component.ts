import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScoreCounterService, ModalService]
})
export class GameComponent { }
