import { Component, Input, OnInit } from '@angular/core';
import { GameData } from 'src/app/common/gameData';
import { GameUnit } from 'src/app/common/gameItem';
import { multiplierData } from 'src/app/common/multiplierData';
import { FormBuilder } from '@angular/forms';
// import { ScoreCounterService } from 'src/app/services/score_counter/score-counter.service';

@Component({
  selector: 'app-throwing-darts',
  templateUrl: './throwing-darts.component.html',
  styleUrls: ['./throwing-darts.component.css']
})
export class ThrowingDartsComponent implements OnInit {

  @Input() gameUnits: GameUnit[] = []
  @Input() gameData: GameData[] = [];
  multiplierDataArray: multiplierData[] = [];
  profileBuilder = this.fb.group({
    playingUnits: this.fb.array([
      this.fb.group({
        playerName: [''],
        throwings: this.fb.array([
          this.fb.group({
            throwingId: [''],
            points: [''],
            multiplier: ['']
          })
        ])
      })
    ]

    )
  })


  constructor(private fb: FormBuilder) {
    // for(var i: number = 0; i++; i < this.gameData.length){
    //   this.gameData[i].receivedPoints.forEach(element => {
    //     element = 0;
    //   })
    // }
  }

  ngOnInit(): void {
    console.dir(this.gameUnits)
    // this.gameUnits = this.scoreCounter.gameUnits
  }

  handleChange(event: any): void{
    console.dir(event?.target.value)
    console.dir(event.target.name)
    console.dir(this.gameData[0].receivedPoints[0])
    // var target = evt.target.value
    // console.dir(target)
    // console.log(target.value);
  }

  countPoints(): void{
    console.dir()
    const form = document.forms;
    console.log(form);
    // const radios = form.item
  }

  go(){
    console.log(this.profileBuilder.value)
  }

}
