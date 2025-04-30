import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {NgClass} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import {GamesService} from '../service/games.service';

@Component({
  standalone: true,
  selector: 'app-detailed-game',
  imports: [
    NgClass
  ],
  templateUrl: './detailed-game.component.html',
  styleUrl: './detailed-game.component.scss'
})
export class DetailedGameComponent implements OnInit
{
  game!:Game;
  constructor(private activatedRoute : ActivatedRoute,
              private gamesService:GamesService)
  {
  }

  ngOnInit(): void
  {
    let idParam = this.activatedRoute.snapshot.params['id'];

    if(idParam === undefined || isNaN(idParam)){
      throw new Error('Game id is undefined or not a number');
    }

    let game = this.gamesService.getGameById(+idParam);

    if(game == null){
      throw new Error('Game not found');
    }

    this.game = game;
  }

  setGameAsViewed() {
    this.game.isViewed = true;
  }
}
