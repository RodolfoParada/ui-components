import { NotificationDecorator } from './NotificationDecorator.js';

export class UrgentDecorator extends NotificationDecorator {
  send(msg) {
    return `🚨 URGENTE: ${super.send(msg)}`;
  }
}