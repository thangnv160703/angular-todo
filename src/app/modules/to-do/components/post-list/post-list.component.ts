import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/IPost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() postList: IPost[] = [];

  protected handlePostClick(postId: number): void {
    console.log({ postId });
  }
}
