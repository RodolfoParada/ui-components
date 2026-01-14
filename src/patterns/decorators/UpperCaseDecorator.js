import { NotificationDecorator } from './NotificationDecorator.js';

export class UpperCaseDecorator extends NotificationDecorator {
  send(msg) {
    // Primero transformamos el mensaje a mayúsculas
    const upperMsg = msg.toUpperCase();
    // Luego lo pasamos al componente que estamos envolviendo
    return super.send(upperMsg);
  }
}