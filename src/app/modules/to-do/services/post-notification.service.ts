import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostNotificationService {

  private postSubject = new Subject<number>();

  constructor() { }

  public testFunction(): void {
    console.log("Hello");
  }

  public sendPostId(postId: number) {
    this.postSubject.next(postId);
  }

  public getPostSubject(): Subject<number> {
    return this.postSubject;
  }
}
