import { Injectable } from "@angular/core";
import { Game } from "../model/game.model"

@Injectable({
    providedIn: 'root'
})
export class GamesService{
    games: Game[] = [
        {
            id:"1",
            name: 'test',
            firstDayInTop: new Date(1994, 5, 18)
        },
        {
            id:"2",
            name: 'encore test',
            firstDayInTop: new Date(2004, 5, 18)
        },
        {
            id:"3",
            name: 'dernier test',
            firstDayInTop: new Date(2014, 5, 18)
        }
    ]

    getAllGames(): Game[]{
        return this.games;
    }
}
