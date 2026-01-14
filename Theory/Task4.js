// Task 4: Composite Pattern (8 minutos)
// Trata objetos individuales y compuestos uniformemente.

// ❌ Código sin patrón - manejo diferente de elementos
class FileItem {
  constructor(name) {
    this.name = name;
  }

  getSize() { return 100; } // tamaño fijo
}

class DirectoryItem {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  add(item) {
    this.children.push(item);
  }

  getSize() {
    // Lógica diferente para directorios
    return this.children.reduce((total, child) => {
      return total + (child.getSize ? child.getSize() : 0);
    }, 0);
  }
}

// Uso inconsistente
const file = new FileItem('document.txt');
const dir = new DirectoryItem('Documents');
dir.add(file);

// ✅ Composite Pattern - interfaz unificada
class FileSystemItem {
  getName() { throw new Error('Implement in subclass'); }
  getSize() { throw new Error('Implement in subclass'); }
  isDirectory() { return false; }
}

class File extends FileSystemItem {
  constructor(name, size = 100) {
    super();
    this.name = name;
    this.size = size;
  }

  getName() { return this.name; }
  getSize() { return this.size; }
}

class Directory extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  getName() { return this.name; }
  isDirectory() { return true; }

  add(item) {
    this.children.push(item);
  }

  getSize() {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }

  getChildren() {
    return this.children;
  }
}

// Uso consistente
const file = new File('document.txt', 500);
const dir = new Directory('Documents');
dir.add(file);

const subDir = new Directory('Photos');
subDir.add(new File('vacation.jpg', 2000));
dir.add(subDir);

console.log(dir.getSize()); // 2500