import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  size: number = 5;
  directions: string[] = ['north', 'east', 'south', 'west'];
  currentX: number = 3;
  currentY: number = 3;
  currentDirectionKey: number = 2;
  range: number[] = Array.from({length: this.size}, (v, k) => k+1);

  constructor() {
  }

  ngOnInit() {
  }

  move() {
    let x = this.currentX;
    let y = this.currentY;
    switch (this.directions[this.currentDirectionKey]) {
      case 'north':
        y -= 1;
        break;
      case 'east':
        x += 1;
        break;
      case 'south':
        y += 1;
        break;
      case 'west':
        x -= 1;
        break;
    }
    if (x < 1) x = 1;
    if (x > this.size) x = this.size;
    if (y < 1) y = 1;
    if (y > this.size) y = this.size;
    this.currentX = x;
    this.currentY = y;
  }

  rotate(direction: string) {
    if (direction == "left") {
      if (this.currentDirectionKey == 0) {
        this.currentDirectionKey = this.directions.length - 1;
      } else {
        this.currentDirectionKey --;
      }
    }

    if (direction == "right") {
      if (this.currentDirectionKey == this.directions.length - 1) {
        this.currentDirectionKey = 0;
      } else {
        this.currentDirectionKey ++;
      }
    }
  }

}
