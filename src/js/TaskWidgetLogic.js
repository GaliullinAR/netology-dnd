export default class TaskWidgetLogic {
  constructor(el) {
    if (Array.isArray(el) && el.length > 0) {
      this.el = el;
    } else {
      throw new Error("Неверно передан тип данных или данные отсутствуют");
    }

    this.selected = null;
    this.offsetY = null;
    this.offsetX = null;
    this.div = null;
  }

  on(typeListen, callback) {
    switch (typeListen) {
      case "click": {
        this.el.forEach((item) => {
          item.addEventListener(typeListen, callback);
        });
        break;
      }
      case "submit": {
        this.el.forEach((item) => {
          const form = item.querySelector(".another-form");
          form.addEventListener(typeListen, callback);
        });
        break;
      }
      default:
        throw new Error("Неверно введено значение типа слушателя событий");
    }
  }

  onDnD() {
   
    this.el.forEach(item => {
      const lists = item.querySelectorAll('.task__list-item');

      lists.forEach(list => {
        list.addEventListener('dragstart', (e) => {
          console.log(true)
          this.selected = e.target;
        });

        list.addEventListener('drop', (e) => {
          let target = e.target;

          target.insertAdjacentElement('afterend', this.selected);
          this.selected = null;
        })
      })

      item.addEventListener('dragover', (e) => {
        e.preventDefault();
        
      })

    })
  }
}
