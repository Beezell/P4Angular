import { Component, Input } from '@angular/core';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-minigame',
  templateUrl: './minigame.component.html',
  styleUrls: ['./minigame.component.scss'],
})
export class MinigameComponent {
  @Input() game!: Game;

  constructor() {}
}
