import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { GameUnit } from 'src/app/common/gameItem';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {


  // @Input() gameUnit?: GameUnit
  @Input() playerName?: string
  fakeArray = new Array(3)
  profileBuilder = this.fb.group({
    throwings: this.fb.array([
      this.fb.group({
        points: [''],
        multiplier: ['']
      })
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.throwings.push(this.fb.group({
      points: [''],
      multiplier: ['']
    }))
    this.throwings.push(this.fb.group({
      points: [''],
      multiplier: ['']
    }))

    console.log(this.playerName)
  }

  handleChange(event: any): void{
    console.dir(event?.target.value)
    console.dir(event.target.name)
    console.dir(this.profileBuilder)
    console.dir(this.profileBuilder.controls)
    this.profileBuilder.patchValue({points: 10 * event.target.value})
    console.log(this.profileBuilder)
  }

  get throwings() {
    return this.profileBuilder.get('throwings') as FormArray;
  }

}
