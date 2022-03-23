import { Component, Input } from '@angular/core';
import { Status } from 'src/app/ui-components/book-store/interfaces/book-store.interface';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  @Input() status: Status = 'IDLE';
}
