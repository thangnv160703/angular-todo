import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';
import { PostNotificationService } from '../../services/post-notification.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post!: IPost;
  @Output() onPostClick = new EventEmitter<number>();

  constructor(
    private postNotify: PostNotificationService
  ) { }

  protected handleButtonClick(): void {
    this.onPostClick.emit(this.post.id);
    this.postNotify.sendPostId(this.post.id);
  }
}
