import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle!: string;
  enteredSummary!: string;
  enteredDueDate!: string;

  private taskService = inject(TasksService);
  onCancelled() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addUserTask(
      {
        enteredTitle: this.enteredTitle,
        enteredDueDate: this.enteredDueDate,
        enteredSummary: this.enteredSummary,
      },
      this.userId
    );
    this.close.emit();
  }
}
