import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players/players.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.component.html',
  styleUrls: ['./add-new-player.component.css']
})
export class AddNewPlayerComponent{
  constructor(private playerService: PlayersService, private router: Router, private fb: FormBuilder) { }

  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    mail: ['', [Validators.required, Validators.email]]
  });

  addPlayer(): void {
    if(this.form.status != "INVALID")
    {
      this.playerService.addPlayer(this.form.value);
      this.router.navigate(['']);
    }
  }
}
