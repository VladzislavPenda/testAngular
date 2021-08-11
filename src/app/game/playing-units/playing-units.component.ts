import { Component, Input, OnInit } from '@angular/core';
import { GameUnit } from 'src/app/common/gameItem';

@Component({
  selector: 'app-playing-units',
  templateUrl: './playing-units.component.html',
  styleUrls: ['./playing-units.component.css']
})
export class PlayingUnitsComponent implements OnInit {

  @Input() gameUnits: GameUnit[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
