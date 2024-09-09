import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { Comment } from '../../interface/comment.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ButtonComponent, NgIf, CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Comment;

  isExpanded = false;
  isReplying = false;

  toggleReply() {
    this.isReplying = !this.isReplying;

    if (this.isReplying) {
      this.isExpanded = true;
    }
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
