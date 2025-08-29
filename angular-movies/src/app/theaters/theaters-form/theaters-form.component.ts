import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { MapComponent } from "../../shared/components/map/map.component";

@Component({
  selector: 'app-theaters-form',
  imports: [ReactiveFormsModule, NzFormModule, NzButtonModule, NzInputModule, NzIconModule, RouterLink, MapComponent],
  templateUrl: './theaters-form.component.html',
  styleUrl: './theaters-form.component.css',
})
export class TheatersFormComponent {
  form: any;
  saveChanges() {
    throw new Error('Method not implemented.');
  }
}
