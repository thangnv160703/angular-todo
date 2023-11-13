import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'trudi-text-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trudi-text-field.component.html',
  styleUrls: ['./trudi-text-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TrudiTextFieldComponent,
      multi: true
    }
  ]
})
export class TrudiTextFieldComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() id?: string;
  @Input() type: string = 'text';
  protected control = new FormControl<string | number>('');
  private onChange: Function = () => { };
  private onTouched: Function = () => { };
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.onChange(this.control.value);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  writeValue(obj: string | number): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
