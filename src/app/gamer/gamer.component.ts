import { Component, OnInit } from '@angular/core';
import { Game } from "../models/game";
import { GameService } from "./game.service";

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.scss']
})
export class GamerComponent implements OnInit {

  public games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.gameService.fetchGames().subscribe((games: Game[]) => this.games = games);
  }
}
