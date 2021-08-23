import { Injectable } from '@angular/core';
import { PlayersService } from '../players/players.service';
import { GameHistory } from 'src/app/common/gameHistory';
import { gameForm, Throwings } from 'src/app/common/gameForm';
import { Players } from 'src/app/common/players';
import { GameUnit } from 'src/app/common/gameUnit';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScoreCounterService{

  private move: number = 0;
  private winnerId?: number;
  private selectedGame: string | null;
  private subject = new BehaviorSubject<GameHistory>({gameName: '', moves: []});
  public gameHistory: Observable<GameHistory> = this.subject.asObservable();

  constructor(private playerService: PlayersService, private route: ActivatedRoute, private router: Router) {
    this.selectedGame = this.route.snapshot.paramMap.get('id');
    if(this.selectedGame === '301'){
      this.router.navigate(['/error']);
    }
    this.initGame();
  }

  getMovesNumber(): number{
    return this.move;
  }

  getWinnerId(): number | undefined{
    return this.winnerId;
  }

  count(data: gameForm): void{
    let playersMoveData: Players = {players: []};
    let recievedPoints = 0;
    let points = 0;
    for(let i = 0; i < data.playingUnits.length; i++)
    {
      let lastMultiplierValue = 1;
      let previosPoints = this.subject.value.moves[0].players[i].points;
      [recievedPoints, lastMultiplierValue] = this.getRecievedPointsWithLastMultiplier(data.playingUnits[i].throwings, i, recievedPoints, lastMultiplierValue);
      points = this.countTotalPoints(previosPoints, recievedPoints);
      if (points == 0 && lastMultiplierValue == 2){
        this.winnerId = i; // implement winning panel later
      }

      playersMoveData.players.push({person: data.playingUnits[i].name, points: points});
      recievedPoints = 0;
    }

    this.move += 1;
    if (this.move == 20)
    {
      this.findWinner(playersMoveData.players);
    }

    this.subject.value.moves = [playersMoveData].concat(this.subject.value.moves);
    this.loadHistory(this.subject.value);
  }

  initGame(){
    this.selectedGame = this.route.snapshot.paramMap.get('id');
    let gameHistory: GameHistory = {gameName: '', moves: []};
    let playersMoveData: Players = {players: []};
    this.playerService.players.forEach(element => {
      playersMoveData.players.push({person: element.name, points: 501});
    });

    gameHistory.gameName = this.selectedGame;
    gameHistory.moves.push(playersMoveData);
    this.loadHistory(gameHistory);
  }

  countTotalPoints(previosPoints: number, recievedPoints: number): number{
    let points: number;
    if(this.move == 0){
      points = 501 - recievedPoints;
    }
    else if (previosPoints < recievedPoints || previosPoints - recievedPoints == 1){
      points = previosPoints;
    }
    else{
      points = previosPoints - recievedPoints;
    }

    return points;
  }

  getRecievedPointsWithLastMultiplier(data: Throwings[], i: number, recievedPoints: number, lastMultiplierValue: number) {
    data.forEach(throwing =>{
      recievedPoints += throwing.multiplier * throwing.points;
      if(throwing.points != 0 && throwing.points != null)
      {
        lastMultiplierValue = throwing.multiplier;
      }

    });
    return [recievedPoints, lastMultiplierValue]
  }

  findWinner(players: GameUnit[]){
    let min = players[0].points;
    let winnerId = 0;
    for(let i = 1; i < players.length; i++)
    {
      if (players[i].points < min){
        min = players[i].points;
        winnerId = i;
      }
    }

    this.winnerId = winnerId;
  }

  loadHistory(history: GameHistory){
    this.subject.next(history);
  }
}
