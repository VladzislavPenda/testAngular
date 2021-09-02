import { Injectable } from '@angular/core';
import { PlayersService } from '../players/players.service';
import { GameHistory } from 'src/app/common/gameHistory';
import { gameForm, Throwings } from 'src/app/common/gameForm';
import { Players } from 'src/app/common/players';
import { GameUnit } from 'src/app/common/gameUnit';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

const MAX_GAME_MOVES_NUMBER = 20;
const START_POINTS = 501;
const LAST_MULTIPLIER_NUMBER_NEEDED_TO_WIN = 2

@Injectable()
export class ScoreCounterService {

  private move: number = 0;
  private winnerId?: number;
  private winnerName?: string;
  private selectedGame: string | null;
  private subject = new BehaviorSubject<GameHistory>({gameName: '', moves: []});
  public gameHistory: Observable<GameHistory> = this.subject.asObservable();

  constructor(private playerService: PlayersService, private route: ActivatedRoute, private router: Router) {
    this.selectedGame = this.route.snapshot.paramMap.get('id');
    if(this.selectedGame === '301') {
      this.router.navigate(['/error']);
    }
    this.initGame();
  }

  public getMovesNumber(): number {
    return this.move;
  }

  public getWinnerId(): number | undefined {
    return this.winnerId;
  }

  public getWinnerName(): string | undefined {
    return this.winnerName;
  }
  public getGameHistoryMoves(): Observable<GameHistory["moves"]> {
    return this.gameHistory.pipe(map((data: any)=> {
      return data["moves"];
    }));
  }

  public count(data: gameForm): void {
    let playersMoveData: Players = {players: []};
    let recievedPoints = 0;
    // let winnerName: string;
    let points = 0;
    for(let i = 0; i < data.playingUnits.length; i++) {
      let lastMultiplierValue = 1;
      let previosPoints = this.subject.value.moves[0].players[i].points;
      [recievedPoints, lastMultiplierValue] = this.getRecievedPointsWithLastMultiplier(data.playingUnits[i].throwings, i, recievedPoints, lastMultiplierValue);
      points = this.countTotalPoints(previosPoints, recievedPoints, lastMultiplierValue);
      if (points == 0 && lastMultiplierValue == LAST_MULTIPLIER_NUMBER_NEEDED_TO_WIN) {
        this.winnerId = i;
        this.winnerName = data.playingUnits[i].name;
      }

      playersMoveData.players.push({person: data.playingUnits[i].name, points: points});
      recievedPoints = 0;
    }

    this.move += 1;
    if (this.move == MAX_GAME_MOVES_NUMBER) {
      this.findWinner(playersMoveData.players);
    }

    this.subject.value.moves = [playersMoveData].concat(this.subject.value.moves);
    this.loadHistory(this.subject.value);
  }

  private initGame() {
    this.selectedGame = this.route.snapshot.paramMap.get('id');
    let gameHistory: GameHistory = {gameName: '', moves: []};
    let playersMoveData: Players = {players: []};
    this.playerService.takePlayers().forEach(element => {
      playersMoveData.players.push({person: element.name, points: START_POINTS});
    });

    gameHistory.gameName = this.selectedGame;
    gameHistory.moves.push(playersMoveData);
    this.loadHistory(gameHistory);
  }

  private countTotalPoints(previosPoints: number, recievedPoints: number, lastMultiplier: number): number {
    let points: number;
    if(this.move == 0) {
      points = START_POINTS - recievedPoints;
    }
    else if (previosPoints < recievedPoints || previosPoints - recievedPoints == 1 || (lastMultiplier != LAST_MULTIPLIER_NUMBER_NEEDED_TO_WIN && previosPoints - recievedPoints == 0)) {
      points = previosPoints;
    }
    else {
      points = previosPoints - recievedPoints;
    }

    return points;
  }

  private getRecievedPointsWithLastMultiplier(data: Throwings[], i: number, recievedPoints: number, lastMultiplierValue: number) {
    data.forEach(throwing =>{
      recievedPoints += throwing.multiplier * throwing.points;
      if(throwing.points != 0 && throwing.points != null) {
        lastMultiplierValue = throwing.multiplier;
      }

    });
    return [recievedPoints, lastMultiplierValue]
  }

  private findWinner(players: GameUnit[]) {
    let min = players[0].points;
    let winnerId = 0;
    let winnerName = players[0].person;
    for(let i = 1; i < players.length; i++) {
      if (players[i].points < min) {
        min = players[i].points;
        winnerId = i;
        winnerName = players[i].person;
      }
    }

    this.winnerName = winnerName;
    this.winnerId = winnerId;
  }

  private loadHistory(history: GameHistory) {
    this.subject.next(history);
  }

  public check(): boolean {
    return this.winnerId == undefined && this.move != MAX_GAME_MOVES_NUMBER ? true : false;
  }
}
