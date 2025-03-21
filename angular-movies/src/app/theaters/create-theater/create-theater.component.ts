import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-create-theater',
  imports: [],
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.css'
})
export class CreateTheaterComponent {

  @Input({ transform: numberAttribute })
  id!: number;
}
