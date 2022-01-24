/**
 * Our internal model of a game.
 */
export interface Game {
  title: string;
  platform: string;
  score: number;
  genres: string[];
  editorsChoice: boolean;
}
