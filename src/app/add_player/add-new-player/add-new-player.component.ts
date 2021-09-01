import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players/players.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.component.html',
  styleUrls: ['./add-new-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayersService]
})
export class AddNewPlayerComponent implements OnInit{
  constructor(private playerService: PlayersService, private router: Router, private fb: FormBuilder) { }

  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    mail: ['', [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.form);
    console.log("init add component.");
  }


  addPlayer(): void {
    if(this.form.valid) {
      this.playerService.addPlayer(this.form.value);
      this.router.navigate(['']);
    }

    console.log(this.form);
  }
}
