import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color: string = 'primary';
  @Input() label: string = 'Label';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  buttonClicked() {
    this.clicked.emit(true);
  }
}
