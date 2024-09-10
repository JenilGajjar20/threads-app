import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
  @Input() placeholder = 'Write something...';
  @Input() btnText = 'Post Comment';

  @Output() formSubmitted = new EventEmitter<{
    text: string;
  }>();

  addComment(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const textAreaElement = form.elements.namedItem(
      'commentText'
    ) as HTMLTextAreaElement;

    const commentText = textAreaElement.value;
    form.reset();
    console.log({ commentText });
    this.formSubmitted.emit({ text: commentText });
  }
}
