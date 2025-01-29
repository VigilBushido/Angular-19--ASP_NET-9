import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-rating',
  imports: [NzIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }
  @Input({ required: true })
  maxRating!: number;

  maxRatingArray: any[] = [];

  @Input()
  selectedRating = 0;

  handleMouseEnter(index: number) {
    this.selectedRating = index + 1;
  }

  handleMouseLeave() {
    this.selectedRating = 0;
  }
}
