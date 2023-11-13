import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'

@Component({
  selector: 'trudi-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './trudi-checkbox.component.html',
  styleUrls: ['./trudi-checkbox.component.scss']
})
export class TrudiCheckboxComponent {
  @Input() viewValue: string = '';
  @Input() checked: boolean = false;
  @Output() onCheckedChange = new EventEmitter<void>();

  protected handleChange(): void {
    this.onCheckedChange.emit();
  }
}
