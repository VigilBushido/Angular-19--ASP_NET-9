import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { toBase64 } from '../../functions/toBase64';

@Component({
  selector: 'app-input-img',
  imports: [NzButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class InputImgComponent {
  @Input({ required: true })
  title!: string;

  imageBase64?: string; // can be undefined

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('File selected:', file);
      toBase64(file).then((value: string) => this.imageBase64 = value)
        .catch(error => console.log(error));
    }
  }
}
