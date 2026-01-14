import { Notification } from './Notification.js';

export class BasicNotification extends Notification {
  send(msg) {
    return `[Estándar]: ${msg}`;
  }
}