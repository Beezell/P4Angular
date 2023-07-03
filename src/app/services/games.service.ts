import { Injectable } from "@angular/core";
import { Game } from "../model/game.model"
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GamesService{

  private apiUrl = "http://localhost:3000/api/games-by-viewers";

  constructor(private http : HttpClient){}

  getGamesApi() {
    return this.http.get<Game[]>(this.apiUrl);
  }
}
