import { Notification } from '../composite/Notification.js';

export class NotificationDecorator extends Notification {
  constructor(notification) {
    super();
    this.notification = notification;
  }
  send(msg) {
    return this.notification.send(msg);
  }
}