import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseGameComponent implements OnInit, OnDestroy {

  public games: number[] = [];
  public selectedGame: number = 0;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }

  selectGame(gameName: number): void{
    this.gamesService.SelectGame(gameName);
    this.selectedGame = this.gamesService.selectedGame;
  }

  ngOnDestroy(){
  }
}
