import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';
import { PlayersService } from 'src/app/services/players/players.service';
import { PlayerInfo } from 'src/app/common/playerInfo';
import { Throwings } from 'src/app/common/gameForm';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-throwing-darts',
  templateUrl: './throwing-darts.component.html',
  styleUrls: ['./throwing-darts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ThrowingDartsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public submitted = false;
  public throwingArrayInit: Throwings[];
  // public viewContainerRef: ViewContainerRef

  constructor(private fb: FormBuilder, private counterService: ScoreCounterService, private playersService: PlayersService, private viewContainerRef: ViewContainerRef, private modalService: ModalService) {
    let obj = {};
    // this.viewContainerRef = viewContainerRef;
    this.throwingArrayInit = this.initializeArray();
    this.form = this.fb.group({
      playingUnits: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.playersService.takePlayers().forEach(element => {
      this.playingUnits.push(this.fb.group({
        name: element.name,
        throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
      }))
    });
  }

  private initializeArray(): Throwings[] {
    return [{points: 0, multiplier: 0}, {points: 0, multiplier: 0}, {points: 0, multiplier: 0}];
  }

  public players(): PlayerInfo[] {
    return this.playersService.takePlayers();
  }

  public count() {
    this.submitted = true;
    if(this.form.valid && this.counterService.check()) {
      this.counterService.count(this.form.value);
      let winnerName = this.counterService.getWinnerName()
      if(winnerName != undefined) {
        this.modalService.loadComponent(winnerName, this.viewContainerRef);
      }
    }
  }

  public getArr(index: number) {
    return (this.form.get(`playingUnits.${index}.throwings`) as FormArray).controls;
  }

  private get playingUnits() {
    return this.form.get('playingUnits') as FormArray;
  }

  ngOnDestroy() {
    this.viewContainerRef.clear();
    console.log("%c throwing darts cmp destroyed.", "color: green");
  }
}
