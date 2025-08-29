import { Component, Input, numberAttribute } from '@angular/core';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";

@Component({
  selector: 'app-create-theater',
  imports: [TheatersFormComponent],
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.css'
})
export class CreateTheaterComponent {
  saveChanges($event: Event) {
    throw new Error('Method not implemented.');
  }

  @Input({ transform: numberAttribute })
  id!: number;
}
