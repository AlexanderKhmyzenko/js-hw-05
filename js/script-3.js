// использование методов класса

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(goods) {
    this.items = [];
    for (const good of goods) {
      this.items.push(good);
    }
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > 0) {
      this.items.splice(index, 1);
    }
  }
}
console.log(typeof Storage);

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

const storage = new Storage(goods);

console.log(storage.getItems());

storage.addItem("Дроид");
console.log(storage.getItems());

storage.removeItem("Пролонгер");
console.log(storage.getItems());
