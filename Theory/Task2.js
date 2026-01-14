// Task 2: Decorator Pattern (8 minutos)
// Añade funcionalidad sin modificar la clase original.

// ❌ Código sin patrón - herencia excesiva
class BasicCoffee {
  cost() { return 5; }
  description() { return 'Café básico'; }
}

class MilkCoffee extends BasicCoffee {
  cost() { return super.cost() + 1; }
  description() { return super.description() + ' con leche'; }
}

class SugarMilkCoffee extends MilkCoffee {
  cost() { return super.cost() + 0.5; }
  description() { return super.description() + ' con azúcar'; }
}

// Problema: explosión combinatoria

// ✅ Decorator Pattern - composición flexible
class Coffee {
  cost() { return 5; }
  description() { return 'Café básico'; }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() { return this.coffee.cost(); }
  description() { return this.coffee.description(); }
}

class MilkDecorator extends CoffeeDecorator {
  cost() { return super.cost() + 1; }
  description() { return super.description() + ' con leche'; }
}

class SugarDecorator extends CoffeeDecorator {
  cost() { return super.cost() + 0.5; }
  description() { return super.description() + ' con azúcar'; }
}

class VanillaDecorator extends CoffeeDecorator {
  cost() { return super.cost() + 1.5; }
  description() { return super.description() + ' con vainilla'; }
}

// Uso flexible
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new VanillaDecorator(coffee);

console.log(coffee.description()); // "Café básico con leche con azúcar con vainilla"
console.log(coffee.cost()); // 5 + 1 + 0.5 + 1.5 = 8