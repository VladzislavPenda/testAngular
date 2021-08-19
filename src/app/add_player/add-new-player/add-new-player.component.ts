import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/common/player';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players/players.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.component.html',
  styleUrls: ['./add-new-player.component.css']
})
export class AddNewPlayerComponent implements OnInit {

  public submitted: boolean = false;
  public player: Player = {name: '', mail: ''};
  
  constructor(private playerService: PlayersService, private router: Router, private fb: FormBuilder) { }

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    mail: ['', [Validators.required, Validators.email]]
  });


  ngOnInit(): void {
  }

  addPlayer(): void {
    this.submitted = true;
    console.log(this.form);
    if(this.form.status != "INVALID")
    {
      const navigationParams: string[] = [''];
      this.playerService.addPlayer(this.player);
      this.router.navigate(navigationParams);
    }
  }
}
