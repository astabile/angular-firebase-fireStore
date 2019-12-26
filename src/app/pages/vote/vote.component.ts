import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  games: Game[] = [];

  constructor(private _game: GameService) { }

  ngOnInit() {
    this._game.getNominates()
      .subscribe(resp => {
        this.games = resp;
      });
  }
}