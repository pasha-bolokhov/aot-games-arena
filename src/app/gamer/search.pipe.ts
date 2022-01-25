import { Pipe, PipeTransform } from '@angular/core';
import { Game } from "../models/game";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value: Game[], searchTerm: string): Game[] {
    if (!value || value.length === 0) {
      return [];
    }
    if (!searchTerm || searchTerm.length === 0) {
      return value;
    }
    const searchTermLowerCase = searchTerm.toLowerCase();

    return value.filter(game => game.title.toLowerCase().includes(searchTermLowerCase));
  }
}
