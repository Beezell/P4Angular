import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit{
  
  games!: Game[];

  constructor(private gamesServce: GamesService){}

  ngOnInit(): void {
      this.games = this.gamesServce.getAllGames();
  }

}
