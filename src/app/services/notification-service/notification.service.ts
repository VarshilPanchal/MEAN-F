import { EventEmitter, Injectable } from '@angular/core';
import { Alert } from './Alert';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  showNotification = new EventEmitter<Alert>();

  showInfo(summary: string): void {
    const errorData = new Alert(2, 'info', summary);
    this.showNotification.emit(errorData);
  }

  showWarn(summary: string): void {
    const errorData = new Alert(3, 'warning', summary);
    this.showNotification.emit(errorData);
  }

  showError(summary: string): void {

    const errorData = new Alert(4, 'danger', summary);

    this.showNotification.emit(errorData);
  }

  showSuccess(summary: string): void {

    const errorData = new Alert(1, 'success', summary);
    this.showNotification.emit(errorData);
  }
}
