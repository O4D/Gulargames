import { Routes } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {GamelistComponent} from './gamelist/gamelist.component';
import {DetailedGameComponent} from './detailed-game/detailed-game.component';

export const routes: Routes = [
  { path: "", component:GamelistComponent},
  { path: "games", component:GamelistComponent},
  { path: "game/:id", component:DetailedGameComponent}
];
