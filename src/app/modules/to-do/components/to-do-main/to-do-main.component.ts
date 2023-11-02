import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostCrudService } from 'src/app/shared/services/post-crud.service';
import { PostNotificationService } from '../../services/post-notification.service';
import { Subject, pipe, takeUntil } from 'rxjs';
import { TaskCrudService } from 'src/app/shared/services/task-crud.service';

@Component({
  selector: 'app-to-do-main',
  templateUrl: './to-do-main.component.html',
  styleUrls: ['./to-do-main.component.scss']
})
export class ToDoMainComponent {
  protected postList: IPost[] = [];
  private $unsubscribe = new Subject<void>();

  protected taskId!: number;

  constructor(
    private postCrud: PostCrudService,
    private postNotify: PostNotificationService,
    private taskCrud: TaskCrudService
  ) { }

  ngOnInit(): void {
    this.postCrud.getAllPosts().subscribe(
      (response: IPost[]) => {
        this.postList = response;
      }
    );
    this.postNotify.getPostSubject()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(
        (postId: number) => {
          console.log('Main:', { postId });
        }
      );
    this.taskCrud.getAll().subscribe(
      response => console.log(response)
    )
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
