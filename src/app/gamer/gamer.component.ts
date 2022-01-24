import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.scss']
})
export class GamerComponent implements OnInit {

  public games: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
