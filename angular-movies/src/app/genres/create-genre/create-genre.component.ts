import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-create-genre',
  imports: [NzIconModule, NzButtonModule],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  router = inject(Router);

  saveChanges() {
    //.. save changes
    this.router.navigate(['/genres']);

  }
}
