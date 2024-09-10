import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() isExpanded = signal(false);
  @Input() isReplying = signal(false);
  // @Input() toggleExpand: () => void = () => {};
  // @Input() toggleReply: () => void = () => {};

  @Output() expand = new EventEmitter<void>();
  @Output() reply = new EventEmitter<void>();

  toggleExpand() {
    this.expand.emit();
  }

  toggleReply() {
    this.reply.emit();
  }
}
