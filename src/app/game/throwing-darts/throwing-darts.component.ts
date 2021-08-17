import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GameData } from 'src/app/common/gameData';
import { GameUnit } from 'src/app/common/gameUnit';
import { multiplierData } from 'src/app/common/multiplierData';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitComponent } from '../unit/unit.component';
import { PlayingUnitsComponent } from '../playing-units/playing-units.component';
// import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-throwing-darts',
  templateUrl: './throwing-darts.component.html',
  styleUrls: ['./throwing-darts.component.css']
})
export class ThrowingDartsComponent implements OnInit {

  @Input() gameUnits: GameUnit[] = [];
  @ViewChild(PlayingUnitsComponent, {static: false})
  private unitComponent: PlayingUnitsComponent|undefined;

  multiplierDataArray: multiplierData[] = [];
  // form: FormGroup;


  playingUnitsForm = this.fb.group({
    playingUnits: this.fb.array([
      this.fb.group({
        playerName: [''],
        throwings: this.fb.array([
          this.fb.group({
            points: [''],
            multiplier: ['']
          })
        ])
      })
    ])
  })
  public throwingArrayInit = [{points: 0, multiplier: 0}, {points: 0, multiplier: 0}, {points: 0, multiplier: 0}];
  form = this.fb.group({
    playingUnits: this.fb.array([
      this.fb.group({
        name: ['first'],
        throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
      })
    ])
  });



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      playingUnits: this.fb.array([
        this.fb.group({
          name: ['first'],
          throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
        })
      ])
    });
    // for(var i: number = 0; i++; i < this.gameData.length){
    //   this.gameData[i].receivedPoints.forEach(element => {
    //     element = 0;
    //   })
    // }
  }

  ngOnInit(): void {

    // console.dir(this.gameUnits);
    // this.form = this.fb.group({
    //   units: this.fb.array(this.gameUnits.map(_ => this.fb.control(null)))
    // });
    // this.gameUnits = this.scoreCounter.gameUnits



  }

  handleChange(event: any): void{
    console.dir(event?.target.value)
    console.dir(event.target.name)
    // console.dir(this.gameData[0].receivedPoints[0])
    // var target = evt.target.value
    // console.dir(target)
    // console.log(target.value);
  }

  countPoints(): void{
    // console.dir()
    // const form = document.forms;
    // console.log(form);
    this.unitComponent?.count()
    // const radios = form.item
  }

  go(){
    console.log(this.playingUnitsForm.value)
  }

}
