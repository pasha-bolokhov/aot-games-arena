import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import { Game } from "../models/game";
import { GameData } from "../models/game-data";

type EditorsChoice = "Y" | "N";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  static readonly GAME_SOURCE = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";
  static readonly editorsChoiceMap = new Map<EditorsChoice, boolean>([["Y", true], ["N", false]]);

  constructor() { }

  fetchGames = (): Observable<Game[]> =>
    from(this.fetcher()).pipe(
      map((data: GameData[]) => this.convertData(data)),
    );

  fetcher = async (): Promise<GameData[]> => {
    const response = await fetch(GameService.GAME_SOURCE);
    const dataIn: GameData[] = await response.json();
    dataIn.shift();         // remove some junk in the beginning
    return dataIn;
  };

  convertData = (dataIn: GameData[]): Game[] => dataIn.map(
    ({
      "title": title,
      "platform": platform,
      "score": score,
      "genre": genre,
      "editors_choice": editorsChoiceChar,
    }) => ({
      title,
      platform,
      score,
      editorsChoice: GameService.editorsChoiceMap.get(editorsChoiceChar as EditorsChoice) ?? false,
      genres: genre.split(",").map((g: string) => g.trim()),
    }),
  );
}
