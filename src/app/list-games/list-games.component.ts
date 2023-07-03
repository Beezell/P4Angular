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

  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
    this.gamesService.getGamesApi().subscribe(
      (response: Game[]) => {
        this.games = response;
      },
      (error) => {
        console.log("Error fetching games from API:", error);
      }
    );
  }
}
