import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { GameUnit } from 'src/app/common/gameUnit';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-throwing-darts',
  templateUrl: './throwing-darts.component.html',
  styleUrls: ['./throwing-darts.component.css']
})
export class ThrowingDartsComponent implements OnInit, OnDestroy {

  @Input() gameUnits: GameUnit[] = [];
  public form: FormGroup;
  public submitted = false;
  public throwingArrayInit = [{points: 0, multiplier: 0}, {points: 0, multiplier: 0}, {points: 0, multiplier: 0}];

  constructor(private fb: FormBuilder, private counterService: ScoreCounterService)
  {
    this.form = this.fb.group({
    playingUnits: this.fb.array([
      this.fb.group({
        name: [''],
        throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
      })
    ])
  });
  }

  ngOnInit(): void {
    this.playingUnits.removeAt(0);
    this.gameUnits.forEach(element => {
      this.playingUnits.push(this.fb.group({
        name: element.person,
        throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
      }));
    });
  }

  public count()
  {
    this.submitted = true;
    if(this.form.status != "INVALID" && this.counterService.getWinnerId() == undefined && this.counterService.getMovesNumber() != 20){
      this.counterService.count(this.form.value);
    }
  }

  public getArr(index: number) {
    return (this.form.get(`playingUnits.${index}.throwings`) as FormArray).controls;
  }

  private get playingUnits(){
    return this.form.get('playingUnits') as FormArray;
  }

  ngOnDestroy(){
    console.log("throw destroyed");
  }
}
