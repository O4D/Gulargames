import {Injectable} from '@angular/core';
import {Game, GamesStatus} from '../models/game';
import {Params} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class GamesService
{
  private AllGames = [
    new Game(
      "Le Cerceau de pouvoir...",
      'assets/tiles/ring_fit_adventure.jpg',
      'Nintendo',
      16,
      'Japon',
      'To write...',
      'RingFit Adventures',
      'To write...',
      0,
      25,
      GamesStatus.CurrentlyPlaying,
    ),
    new Game(
      "'Second Life'",
      'assets/tiles/state_of_mind.jpg',
      'Daedalic Entertainment',
      16,
      'Allemagne',
      'To write...',
      'State of Mind',
      'Le jeu surprend par ses rebondissements, ses thèmes variés et regorge de ligne de dialogue qui font de State Of Mind un jeu qui se savoure comme on lit un livre. Petite production, les quelques décors sont soignés, les personnages bien écris et les phases de recherches originales. En bonne SF, le jeu questionne par ses analogies avec le réel qui vont jusqu\'à nous faire nous demander ce qui, pour nous, doit vraiment faire partie de notre réalité.',
      3.5,
      20
    ),new Game(
      'Carnage Psychotique',
      'assets/tiles/decarnation.jpg',
      'Atelier QDB',
      16,
      'France',
      'To write...',
      'Décarnation',
      'To write...',
      5,
      12,
      GamesStatus.ToWrite
    )];

  constructor()
  {
  }

  getGameById(id:number):Game
  {
    console.log("id",typeof(id));
    console.log("game.id",typeof(this.AllGames[0].id));
    console.log("this.AllGames",this.AllGames);
    let game = this.AllGames.find(game => game.id === id);
    console.log(game)

    if(game === undefined)
    {
      throw new Error('Game not found');
    }

    return game;
  }

  getAllGames()
  {
    return [...this.AllGames];
  }
}
