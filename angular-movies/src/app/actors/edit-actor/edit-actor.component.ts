import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreationDTO, ActorDTO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsFormComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  model: ActorDTO = { id: 1, name: 'Tom Holland', dataOfBirth: new Date('1996-06-01'), picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg' };

  saveChanges(actor: ActorCreationDTO) {
    console.log('editing the actor', actor);
  }
}
