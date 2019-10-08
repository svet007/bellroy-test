import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() ownX: number;
  @Input() ownY: number;
  @Input() currentX: number;
  @Input() currentY: number;
  @Input() facing: string;

  constructor() { }

  ngOnInit() {
  }

}
