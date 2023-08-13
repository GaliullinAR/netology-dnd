import TaskWidget from "./taskWidget";
import TaskWidgetLogic from "./TaskWidgetLogic";
import taskWidgetList from './taskWidgetList';
import Storages from "./Storages";

const task = new TaskWidget('tasks__container', taskWidgetList);
task.createTodos();

const taskWidgetLogic = new TaskWidgetLogic(task.getElementsArr);

// Включение кнопок открытия и скрытия ввода текста
taskWidgetLogic.on('click', (e) => {
  let target = e.target;
  const another = e.target.closest('.add-another');
  const anotherInput = another.querySelector('.another__input');

  if (target.closest('.add-another__btn')) {
    anotherInput.style.display = 'block';
    anotherInput.previousElementSibling.style.display = 'none';
  }

  if (target.classList.contains('another__input-remove')) {
    anotherInput.style.display = 'none';
    anotherInput.previousElementSibling.style.display = 'flex';
  }
});


// Добавление новых задач
taskWidgetLogic.on('submit', (e) => {
  e.preventDefault();
  let { value } = e.target.textarea;
  const taskItem = e.target.closest('.task__item');
  const list = taskItem.querySelector('.task__list');

  const li = document.createElement('li');
  li.classList.add('task__list-item');
  
  if (value.trim().length > 0) {
    li.textContent = value;
    list.insertAdjacentElement('beforeend', li);
    e.target.textarea.value = '';
  } else {
    e.target.textarea.value = "";
    return;
  }

});

taskWidgetLogic.onDnD();