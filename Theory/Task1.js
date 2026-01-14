// Task 1: Adapter Pattern (8 minutos)
// Adapta interfaces incompatibles.

// ❌ Código problemático - interfaces incompatibles
class OldPaymentAPI {
  pay(amount, currency) {
    return `Paid ${amount} ${currency} via old API`;
  }
}

class NewPaymentAPI {
  processPayment(amount, currency, method) {
    return `Processed ${amount} ${currency} with ${method}`;
  }
}

// Cliente espera una interfaz
class PaymentService {
  constructor(api) {
    this.api = api;
  }

  makePayment(amount, currency) {
    // Problema: APIs tienen interfaces diferentes
    if (this.api.pay) {
      return this.api.pay(amount, currency);
    } else if (this.api.processPayment) {
      return this.api.processPayment(amount, currency, 'card');
    }
  }
}

// ✅ Adapter Pattern - unifica interfaces
class PaymentAdapter {
  constructor(adaptedAPI) {
    this.api = adaptedAPI;
  }

  // Interfaz común
  pay(amount, currency) {
    if (this.api.pay) {
      // Old API
      return this.api.pay(amount, currency);
    } else if (this.api.processPayment) {
      // New API
      return this.api.processPayment(amount, currency, 'card');
    }
  }
}

// Uso consistente
const oldAPI = new OldPaymentAPI();
const newAPI = new NewPaymentAPI();

const service = new PaymentService(new PaymentAdapter(oldAPI));
const service2 = new PaymentService(new PaymentAdapter(newAPI));