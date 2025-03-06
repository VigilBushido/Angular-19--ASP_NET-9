import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-index-genres',
  imports: [RouterLink, NzIconModule, NzButtonModule],
  templateUrl: './index-genres.component.html',
  styleUrl: './index-genres.component.css'
})
export class IndexGenresComponent {

}
