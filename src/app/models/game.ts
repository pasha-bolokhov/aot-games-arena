/**
 * Our internal model of a game.
 */
interface Game {
  title: string;
  platform: string;
  score: number;
  genres: string[];
  editorsChoice: boolean;
}
