import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Game } from '../interfaces/interfaces';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominates() {
    if (this.games.length > 0) {
      return of(this.games);
    }
    else {
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(tap(
          games => this.games = games
        ));
    }
  }
}
