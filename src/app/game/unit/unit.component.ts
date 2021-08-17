import { Component, Input, OnInit, Type } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { GameData } from 'src/app/common/gameData';
import { GameUnit } from 'src/app/common/gameUnit';
import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  @Input() playerName?: string;
  @Input() gameUnits: GameUnit[] = [];
  // public form2: FormGroup;

  public throwingArrayInit = [{points: 0, multiplier: 0}, {points: 0, multiplier: 0}, {points: 0, multiplier: 0}];

  // public form = this.fb.group({
  //   playingUnits: this.fb.array([
  //     this.fb.group({
  //       name: ['first'],
  //       throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
  //     })
  //   ])
  // });
  form = this.fb.group({
    playingUnits: this.fb.array([
      this.fb.group({
        name: ['first'],
        throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
      })
    ])
  });

  // form2 = this.fb.group({
  //   playingUnits: this.fb.array([
  //     this.fb.group({
  //       name: [''],
  //       throwings2: this.fb.array([
  //         this.fb.group({
  //           points: [''],
  //           multiplier: ['']
  //         })
  //       ])
  //     })
  //   ])
  // });
  constructor(private fb: FormBuilder, private counterService: ScoreCounterService) { }

  ngOnInit(): void {
    // let throwingArray = [{points: 0, multiplier: 0}, {points: 0, multiplier: 0}, {points: 0, multiplier: 0}];
    let fakeArr = new Array(3)
    // this.form2 = this.fb.group({
    //   playingUnits: this.fb.group({
    //     name: "fff",
    //     throwings2: this.fb.array(throwingArray.map(_ => this.fb.group({points: 0, multiplier: 1})))
    //   })
    // })



    this.playingUnits.push(this.fb.group({
      name: "second",
      throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
    }));
    this.playingUnits.push(this.fb.group({
      name: "third",
      throwings: this.fb.array(this.throwingArrayInit.map(_ => this.fb.group({points: 0, multiplier: 1})))
    }));

    // console.log(throwingArray);
    console.log(this.form);
    console.log(this.gameUnits);
    // this.throwings2.push(this.fb.group({
    //   points: [''],
    //   multiplier: ['']
    // }))
    // this.throwings2.push(this.fb.group({
    //   points: [''],
    //   multiplier: ['']
    // }))
  }

  count(multiplier: number)
  {
  }

  public getArr(index: number) {
    return (this.form.get(`playingUnits.${index}.throwings`) as FormArray).controls;
  }

  private get throwings() {
    return this.form.get('throwings') as FormArray;
  }

  private get playingUnits(){
    return this.form.get('playingUnits') as FormArray;
  }

}
