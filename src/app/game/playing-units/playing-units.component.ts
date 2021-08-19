import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameUnit } from 'src/app/common/gameUnit';

@Component({
  selector: 'app-playing-units',
  templateUrl: './playing-units.component.html',
  styleUrls: ['./playing-units.component.css']
})
export class PlayingUnitsComponent implements OnInit, OnDestroy {

  @Input() gameUnits: GameUnit[] = []

  constructor() { }

  ngOnInit(): void {
  }

  count(): void{
    console.log("Ky")
  }

  ngOnDestroy(){
    console.log("playing destroyed");
  }
}
