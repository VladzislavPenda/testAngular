import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerInfo } from 'src/app/common/playerInfo';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyComponent implements OnInit {
  public players: PlayerInfo[] = [];
  public selectedGame?: string;
  public tryStartGameWithErrors: boolean = false;

  constructor(private playerService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.players = this.playerService.takePlayers();
  }

  public goToCreatingPlayer(): void {
    this.router.navigate(['/create']);
  }

  public deletePlayer(index: number): void {
    this.playerService.removePlayer(index);
  }

  public startGame(): void {
    if(this.selectedGame != null) {
      this.router.navigate([`/game/${this.selectedGame}`]);
    }
    else {
      this.tryStartGameWithErrors = true
    }
  }

  public addSelectedGame(gameName: string) {
    this.selectedGame = gameName;
  }
}
