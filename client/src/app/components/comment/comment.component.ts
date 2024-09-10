import { Component, effect, inject, Input, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgForOf, NgIf } from '@angular/common';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { Comment } from '../../interface/comment.interface';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ButtonComponent, NgIf, CommentFormComponent, NgForOf],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Comment;

  isExpanded = signal(false);
  isReplying = signal(false);

  userService = inject(UserService);

  commentService = inject(CommentService);
  nestedComments = signal<Comment[]>([]);

  nestedCommentEffect = effect(() => {
    if (this.isExpanded()) {
      this.commentService
        .getComments(this.comment._id)
        .subscribe((comments) => {
          this.nestedComments.set(comments);
        });
    }
  });

  toggleReply() {
    this.isReplying.set(!this.isReplying());

    if (this.isReplying()) {
      this.isExpanded.set(true);
    }
  }

  toggleExpand() {
    this.isExpanded.set(!this.isExpanded());
  }

  createComment(formValues: { text: string }) {
    const { text } = formValues;
    const user = this.userService.getUserFromStorage();
    if (!user) return;

    this.commentService
      .createComment({ text, userId: user._id, parentId: this.comment._id })
      .subscribe((createdComment) => {
        this.nestedComments.set([createdComment, ...this.nestedComments()]);
      });
  }

  commentTrackBy(_index: number, comment: Comment) {
    return comment._id;
  }
}
