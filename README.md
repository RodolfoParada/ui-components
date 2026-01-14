Sistema de UI components con composición:

// Composite Pattern en UI
class UIComponent {
  render() { throw new Error('Implement in subclass'); }
  add(component) { throw new Error('No se puede agregar a hoja'); }
  remove(component) { throw new Error('No se puede remover de hoja'); }
  getChildren() { return []; }
}

class Button extends UIComponent {
  constructor(text) {
    super();
    this.text = text;
  }

  render() {
    return `<button>${this.text}</button>`;
  }
}

class Container extends UIComponent {
  constructor() {
    super();
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index > -1) this.children.splice(index, 1);
  }

  getChildren() {
    return this.children;
  }

  render() {
    const childrenHtml = this.children.map(child => child.render()).join('');
    return `<div class="container">${childrenHtml}</div>`;
  }
}

// Uso
const mainContainer = new Container();
const headerContainer = new Container();

headerContainer.add(new Button('Home'));
headerContainer.add(new Button('About'));

mainContainer.add(headerContainer);
mainContainer.add(new Button('Contact'));

console.log(mainContainer.render());
Requerimientos:
# No se requieren dependencias especiales
# Los patrones se implementan con JavaScript vanilla