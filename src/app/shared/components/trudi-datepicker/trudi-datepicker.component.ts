import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'trudi-datepicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './trudi-datepicker.component.html',
  styleUrls: ['./trudi-datepicker.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TrudiDatepickerComponent,
      multi: true
    }
  ]
})
export class TrudiDatepickerComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() label: string = '';
  protected control = new FormControl<Date>(new Date());
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

  writeValue(obj: Date): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
