import { Injectable } from "@angular/core";
import { Game } from "../model/game.model"
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GamesService{

  private apiUrl = "http://localhost:3000/api/";
  private apiGetByViewer = "games-by-viewers";
  private apiGetAll = "games";
  private apiGetSteamGame = "games-steam";

  constructor(private http : HttpClient){}

  getGamesApiByViewer() {
    return this.http.get<Game[]>(this.apiUrl + this.apiGetByViewer);
  }
}
