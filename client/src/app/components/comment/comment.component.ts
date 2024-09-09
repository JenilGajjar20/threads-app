import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
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
