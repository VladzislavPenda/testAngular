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
  public submitted: boolean = false;
  constructor(private playerService: PlayersService, private router: Router, private fb: FormBuilder) { }

  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    mail: ['', [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
    console.log(this.form);
    console.log("init add component.");
  }


  addPlayer(): void {
    this.submitted = true;
    if(this.form.valid) {
      this.playerService.addPlayer(this.form.value);
      this.router.navigate(['']);
    }

    console.log(this.form);
  }
}
