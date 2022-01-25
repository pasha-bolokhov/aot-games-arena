import { Component, OnInit } from '@angular/core';
import { Game } from "../models/game";
import { GameService } from "./game.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.scss']
})
export class GamerComponent implements OnInit {
  games$: Observable<Game[]>;
  searchTerm: string = "";

  constructor(private gameService: GameService) {
    this.games$ = this.gameService.fetchGames();
  }

  ngOnInit(): void {
  }
}
