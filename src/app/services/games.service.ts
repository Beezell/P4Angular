import { Injectable } from "@angular/core";
import { Game } from "../model/game.model"
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GamesService{

  private apiUrl = "http://localhost:3000/api/games";

  constructor(private http : HttpClient){}

  games: Game[] = [];

  getGamesApi() {
    return this.http.get<Game[]>(this.apiUrl);
  }
}
