import {Component, OnInit} from '@angular/core';
import {GameComponent} from "../game/game.component";
import {Game, GamesStatus} from '../models/game';
import {GamesService} from '../service/games.service';

@Component({
  selector: 'app-gamelist',
    imports: [
        GameComponent
    ],
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.scss'
})
export class GamelistComponent implements OnInit{
  public AllGames!:Game[];

  constructor(private gamesService: GamesService)
  {
  }

  ngOnInit(): void {
    this.AllGames = this.gamesService.getAllGames();
  }
}
