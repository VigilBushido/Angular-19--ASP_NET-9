import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-rating',
  imports: [NzIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input({ required: true, transform: (value: number) => Array(value).fill(0) })
  maxRating!: any[];

  maxRatingArray: any[] = [];

  @Input()
  selectedRating = 0;

  @Output()
  rated = new EventEmitter<number>();

  clickedRating = 0;

  handleMouseEnter(index: number) {
    this.selectedRating = index + 1;
  }

  handleMouseLeave() {
    if (this.clickedRating !== 0) {
      this.selectedRating = this.clickedRating;
    } else {
      this.selectedRating = 0;
    }
  }

  handleClick(index: number) {
    this.selectedRating = index + 1;
    this.clickedRating = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }
}
