import { NotificationFacade } from './src/patterns/facade/NotificationFacade.js';

const api = new NotificationFacade();
api.sendAll("Actualización de inventario lista.");