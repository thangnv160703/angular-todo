import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISelectChoice } from '../../interfaces/ISelectChoice';

@Component({
  selector: 'trudi-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trudi-select.component.html',
  styleUrls: ['./trudi-select.component.scss']
})
export class TrudiSelectComponent {
  @Input() choices?: ISelectChoice[];
  @Output() onChoiceClicked = new EventEmitter<unknown>();

  protected handleChoiceClicked(value: unknown): void{
    this.onChoiceClicked.emit(value);
  }
}
