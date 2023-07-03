import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit{
  
  games!: any[];

  constructor(private gamesService: GamesService){}

  ngOnInit(): void {
    this.gamesService.getGamesApi().subscribe({
      next:(data) => {
        this.games = data
      },
      error:(error) => {
        console.log("erreur dans le list-games pour afficher data : " + error);
      } 
    });
  }
}
