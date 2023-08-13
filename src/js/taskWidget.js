export default class TaskWidget {
  constructor(element, todos) {
    if (typeof element === "string" && element[0] === ".") {
      this.element = document.qyuerySelector(element);
    } else if (typeof element === "string" && element[0] !== ".") {
      this.element = document.querySelector(`.${element}`);
    } else {
      throw new Error("Не верно был указан селектор или не был найден");
    }

    if (todos) {
      this.todos = todos;
    } else {
      throw new Error("Передайте пожалуйста ваш список дел");
    }

    this.elemArr = [];
  }

  get getElementsArr() {
    return this.elemArr;
  }

  createTodos() {
    
    for (let item in this.todos) {
      const taskItem = document.createElement("div");
      const taskTitle = document.createElement("h3");
      const taskList = document.createElement("ul");
      const addAnother = document.createElement("div");

      let another = `
        <div class="add-another">
          <button class="add-another__btn" type="button">
                <span>+</span> 
                add another
          </button>
          <div class="another__input" style="display: none;">
            <form class="another-form">
              <textarea name="textarea" placeholder="Введите текст"></textarea>
              <div class="another__input-buttons">
                <button class="another__input-add" type="submit">
                  add
                </button>
                <button class="another__input-remove" type="button">
                  x
                </button>
              </div>
            </form>
          </div>
        </div>
      `;

      taskItem.classList.add("task__item");
      taskTitle.classList.add("task__title");
      taskList.classList.add("task__list");
      addAnother.classList.add("add-another");

      taskTitle.textContent = this.todos[item].title;
      
      this.todos[item].list.forEach(li => {
        const listItem = document.createElement('li');
        listItem.classList.add('task__list-item');
        listItem.setAttribute('draggable', 'true');
        listItem.textContent = li;

        taskList.insertAdjacentElement('beforeend', listItem);
      });

      taskItem.insertAdjacentElement('beforeend', taskTitle);
      taskItem.insertAdjacentElement('beforeend', taskList);
      taskItem.insertAdjacentHTML('beforeend', another);

      this.element.insertAdjacentElement('beforeend', taskItem);
      this.elemArr.push(taskItem);
    }
  }
}
