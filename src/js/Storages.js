export default class Storages {
  static setItem(name, items) {
    if (typeof name === 'string' && items) {
      localStorage.setItem(name, JSON.stringify(items));
      return true;
    }
    throw new Error('Не правильно был передано имя или значение');
  }

  static getItem(name) {
    const item = JSON.parse(localStorage.getItem(name));

    if (item) {
      return item;
    }
    return false;
  }
}
