import { NotificationGroup } from '../composite/NotificationGroup.js';
import { BasicNotification } from '../composite/BasicNotification.js';
import { UrgentDecorator } from '../decorators/UrgentDecorator.js';
import { UpperCaseDecorator } from '../decorators/UpperCaseDecorator.js'; // <--- Nuevo import
import { ServiceAdapter } from '../adapters/ServiceAdapter.js';
import { ExternalOldService } from '../adapters/ExternalOldService.js';

export class NotificationFacade {
  constructor() {
    this.group = new NotificationGroup();
    
    // Ejemplo de "Doble Decoración":
    // El mensaje será básico, luego se pondrá en MAYÚSCULAS y luego se marcará como URGENTE
    const basic = new BasicNotification();
    const urgentUpper = new UrgentDecorator(new UpperCaseDecorator(basic));
    
    const legacy = new ServiceAdapter(new ExternalOldService());
    
    this.group.add(urgentUpper);
    this.group.add(legacy);
  }

  sendAll(message) {
    console.log("--- Sistema de Notificaciones Iniciado ---");
    console.log(this.group.send(message));
    console.log("------------------------------------------");
  }
}