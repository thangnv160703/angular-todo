import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'trudi-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './trudi-checkbox.component.html',
  styleUrls: ['./trudi-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TrudiCheckboxComponent,
      multi: true
    }
  ]
})
export class TrudiCheckboxComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() viewValue: string = '';
  @Input() checked: boolean = false;
  @Output() onCheckedChange = new EventEmitter<void>();

  protected control = new FormControl<boolean>(this.checked);
  private onChange: Function = () => { };
  private onTouched: Function = () => { };
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      () => this.onChange(this.control.value)
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  protected handleChange(): void {
    this.onCheckedChange.emit();
    this.control.setValue(!this.control.value);
  }

  writeValue(obj: boolean): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
