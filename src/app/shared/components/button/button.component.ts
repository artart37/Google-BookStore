import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonStyle: string = '';
  @Input() disabled: boolean = false;
  @Output() buttonClickEvent = new EventEmitter();

  buttonClicked() {
    this.buttonClickEvent.emit();
  }
}
