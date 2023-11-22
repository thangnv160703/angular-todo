import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'trudi-text-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
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
  @Input() label: string = '';
  @Input() placeholder: string = '';

  protected control = new FormControl<string>('');
  private onChange: Function = () => { };
  private onTouched: Function = () => { };
  private unsubscribe$ = new Subject<void>();

  constructor( ) { }

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

  writeValue(obj: string): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

}
