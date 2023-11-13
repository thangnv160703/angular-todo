import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISelectChoice } from '../../interfaces/ISelectChoice';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trudi-select',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './trudi-select.component.html',
  styleUrls: ['./trudi-select.component.scss']
})
export class TrudiSelectComponent {
  @Input() choices: ISelectChoice[] = [];
  @Input() chosen: unknown;
  @Output() onChosenChange = new EventEmitter<unknown>();

  protected handleChoiceClicked(value: unknown): void {
    this.chosen = value;
    this.onChosenChange.emit(value);
  }
}
