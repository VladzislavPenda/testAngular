import { Component, Input, OnInit } from '@angular/core';
import { GameUnit } from 'src/app/common/gameUnit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() gameUnits: GameUnit[] = []

  constructor() { }

  ngOnInit(): void {
  }

  countPoints(): void {
    this.gameUnits[0].points = 40;
  }

}
