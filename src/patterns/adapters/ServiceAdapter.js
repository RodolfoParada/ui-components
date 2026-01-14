import { Notification } from '../composite/Notification.js';

export class ServiceAdapter extends Notification {
  constructor(externalService) {
    super();
    this.service = externalService;
  }
  send(msg) {
    return this.service.postOldMessage(msg);
  }
}