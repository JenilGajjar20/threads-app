import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() isExpanded: boolean = false;
  @Input() isReplying: boolean = false;
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
