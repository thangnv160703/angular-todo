import { Component, OnInit, ViewChild } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import { catchError, filter, forkJoin, from, interval, map, of, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-tutorial-main',
  templateUrl: './tutorial-main.component.html',
  styleUrls: ['./tutorial-main.component.scss']
})
export class TutorialMainComponent {
  @ViewChild(HelloComponent) tutorialComp!: HelloComponent;
  private cached = [4, 5];

  // ngOnInit(): void {
  //   of(1, 2, 3, 4, 5).pipe(
  //     map((n) => {
  //       if (this.cached.includes(n)) {
  //         throw new Error('Duplicated: ' + n);
  //       }
  //       return n;
  //     }),
  //     catchError((err, caught) => of("Duplicated value"))
  //   ).subscribe({
  //     next: (value) => console.log(value)
  //   });
  //   forkJoin([of(1), of(2), throwError(() => new Error('401'))]).pipe(
  //     catchError((err) => of("401 Error"))
  //   ).subscribe(
  //     {
  //       next: value => console.log(value)
  //     }
  //   );
  // }

  public handleClick() {
    this.tutorialComp.handleButtonClick();
  }
}
