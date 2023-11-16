import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: number = 10;
  padd: number = 10;

  onScroll() {
    this.cards += this.padd;
  }

  arraySpaces(): Array<null> {
    return Array(this.cards);
  }
}
