import { Notification } from './Notification.js';

export class NotificationGroup extends Notification {
  constructor() {
    super();
    this.notifications = [];
  }
  add(notification) {
    this.notifications.push(notification);
  }
  send(msg) {
    return this.notifications.map(n => n.send(msg)).join("\n");
  }
}