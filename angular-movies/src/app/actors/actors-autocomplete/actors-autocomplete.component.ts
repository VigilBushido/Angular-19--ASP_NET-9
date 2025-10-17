import { Component } from '@angular/core';
import { ActorAutoCompleteDTO } from '../actors.model';
import { FormControl, FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-actors-autocomplete',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule],
  templateUrl: './actors-autocomplete.component.html',
  styleUrl: './actors-autocomplete.component.css'
})
export class ActorsAutocompleteComponent {
  actors: ActorAutoCompleteDTO[] = [
    { id: 1, name: 'Tom Holland', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg' },
    { id: 2, name: 'Tom Hanks', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg' },
    { id: 3, name: 'Samuel L. Jackson', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/250px-SamuelLJackson.jpg' }
  ];

  actorsOriginal = this.actors;

  actorsSelected: ActorAutoCompleteDTO[] = [];

  control = new FormControl();

  inputValue?: string;
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.actorsOriginal;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    });
  }
}
