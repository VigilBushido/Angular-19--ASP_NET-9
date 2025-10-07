import { Component, Input } from '@angular/core';
import { MultipleSelectorDTO } from './MultipleSelectorDTO';

@Component({
  selector: 'app-multiple-selector',
  imports: [],
  templateUrl: './multiple-selector.component.html',
  styleUrl: './multiple-selector.component.css'
})
export class MultipleSelectorComponent {

  @Input()
  selectedElements: MultipleSelectorDTO[] = [];

  @Input()
  nonSelectedElements: MultipleSelectorDTO[] = [];

  select(element: MultipleSelectorDTO, index: number) {
    this.selectedElements.push(element);
    this.nonSelectedElements.splice(index, 1);
  }

  deselect(element: MultipleSelectorDTO, index: number) {
    this.nonSelectedElements.push(element);
    this.selectedElements.splice(index, 1);
  }

  selectAll() {
    this.selectedElements.push(...this.nonSelectedElements);
    this.nonSelectedElements = [];
  }

  deselectAll() {
    this.nonSelectedElements.push(...this.selectedElements);
    this.selectedElements = [];
  }

}
