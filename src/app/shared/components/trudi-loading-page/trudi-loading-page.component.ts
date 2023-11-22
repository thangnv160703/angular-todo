import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'trudi-loading-page',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './trudi-loading-page.component.html',
  styleUrls: ['./trudi-loading-page.component.scss']
})
export class TrudiLoadingPageComponent {

}
