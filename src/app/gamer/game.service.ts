import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameData } from "../models/game-data.ts";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  static readonly GAME_SOURCE = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";
  static readonly editorsChoiceMap = new Map<"Y" | "N", boolean>([["Y", true], ["N", false]]);

  constructor() { }

  async fetchGames(): Observable<Game[]> {
    const gameListIn = (await (await fetch(GameService.GAME_SOURCE)).json()) as GameData[];

    const gameList: Game[] = gameListIn.map(({
      "title": title,
      "platform": platform,
      "score": score,
      "genre": genre,
      "editors_choice": editorsChoiceChar,
    }) => ({
      title,
      platform,
      score,
      editorsChoice: GameService.editorsChoiceMap.get(editorsChoiceChar) ?? false,
      genres: genre.split(",").map((g: string) => g.trim()),
    }));

    return of(gameList);
  }
}
