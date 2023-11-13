import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoReloadService {
  private subject = new Subject<void>();

  constructor() { }

  public getSubject(): Subject<void> {
    return this.subject;
  }

  public reload(): void {
    this.subject.next();
  }
}
