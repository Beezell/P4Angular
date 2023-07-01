import { Component, Input } from '@angular/core';
import { Game } from '../model/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input() game!: Game;

  constructor(private gamesService: GamesService){}

}
