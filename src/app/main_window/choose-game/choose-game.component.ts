import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseGameComponent {

  public games: string[] = ['501', '301'];
  public selectedGame?: string;
  @Output() selectedGameEvent = new EventEmitter<string>();

  public selectGame(gameName: string): void{
    this.selectedGameEvent.emit(gameName);
    this.selectedGame = gameName;
  }
}
