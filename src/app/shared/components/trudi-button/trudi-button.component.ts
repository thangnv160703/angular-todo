import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trudi-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './trudi-button.component.html',
  styleUrls: ['./trudi-button.component.scss']
})
export class TrudiButtonComponent {
  @Input() viewValue: string = '';
  @Input() color: string = '';
  @Output() onClicked = new EventEmitter<void>();

  protected handleClick(): void {
    this.onClicked.emit();
  }
}
