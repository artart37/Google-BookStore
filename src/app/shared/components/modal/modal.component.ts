import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter();
  constructor() {}

  closeModalAction() {
    this.closeModalEvent.emit();
  }
}
