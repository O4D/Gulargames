import {Component, Input} from '@angular/core';
import {Game, GamesStatus} from '../models/game';
import {DatePipe, formatDate, NgClass} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-game',
  imports: [
    NgClass,
    DatePipe
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  @Input() game!: Game;

  constructor(private router:Router)
  {
  }

  setGameAsViewed() {
    this.game.isViewed = true;
  }

  showGameDetails() {
    console.log('show game details');
  }

  goToGame()
  {
    this.router.navigate(['/game', this.game.id]);
  }

  protected readonly GamesStatus = GamesStatus;
  protected readonly formatDate = formatDate;
}
