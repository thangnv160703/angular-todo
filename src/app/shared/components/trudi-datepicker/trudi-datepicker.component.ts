import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroupDirective, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'trudi-datepicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatInputModule],
  templateUrl: './trudi-datepicker.component.html',
  styleUrls: ['./trudi-datepicker.component.scss']
})
export class TrudiDatepickerComponent {

}
