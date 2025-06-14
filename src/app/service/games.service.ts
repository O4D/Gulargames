import {Injectable} from '@angular/core';
import {Game, GamesStatus} from '../models/game';

@Injectable({
    providedIn: 'root'
  })
export class GamesService
{
  private AllGames = [
    new Game(
      "L'avènement du FRPG",
      "Quand l'hommage au JRPG devient une superbe relève",
      'assets/jaquettes/clair-obscur.png',
      'Daedalic Entertainment',
      16,
      'France',
      'To write...',
      'Clair Obscur : Expedition 33',
      'Le jeu surprend par ses rebondissements, ses thèmes variés et regorge de ligne de dialogue qui font de State Of Mind un jeu qui se savoure comme on lit un livre. Petite production, les quelques décors sont soignés, les personnages bien écris et les phases de recherches originales. En bonne SF, le jeu questionne par ses analogies avec le réel qui vont jusqu\'à nous faire nous demander ce qui, pour nous, doit vraiment faire partie de notre réalité.',
      5,
      80,
      GamesStatus.CurrentlyPlaying,
      "RPG"
    ),new Game(
      "Vers l'ennuie et l'au-delà",
      "L'espace, infini, vide... et buggué",
      'assets/jaquettes/starfield.webp',
      'Bethesda',
      16,
      'USA',
      'To write...',
      'Starfield',
      'To write...',
      2.5,
      200,
      GamesStatus.ToWrite,
    ),new Game(
      "Sans nom",
      "Une quête d'identité surprenante",
      'assets/jaquettes/planescape-torment.jpg',
      'Atelier QDB',
      16,
      'France',
      'To write...',
      'Planescape : Torment',
      'To write...',
      5,
      70,
      GamesStatus.ToWrite,
    "Enquête",
      new Date(2021,3,10)
    ),
    new Game(
      "Age of Empire 2",
      "Ohlolooooooo",
      'assets/jaquettes/aoe2.jpg',
      'Daedalic Entertainment',
      16,
      'Allemagne',
      'To write...',
      'State of Mind',
      'Le jeu surprend par ses rebondissements, ses thèmes variés et regorge de ligne de dialogue qui font de State Of Mind un jeu qui se savoure comme on lit un livre. Petite production, les quelques décors sont soignés, les personnages bien écris et les phases de recherches originales. En bonne SF, le jeu questionne par ses analogies avec le réel qui vont jusqu\'à nous faire nous demander ce qui, pour nous, doit vraiment faire partie de notre réalité.',
      4,
      86,
      GamesStatus.Completed,
      "RTS",
      new Date(2012,11,20)
    ),new Game(
      'The City Builder',
      "Les fondations simple et maîtrisé d'un genre à part entière",
      'assets/jaquettes/simcity-4.jpg',
      'Atelier QDB',
      16,
      'France',
      'To write...',
      'Décarnation',
      'To write...',
      5,
      100,
      GamesStatus.ToWrite,
      "STR"
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
