import { v4 as uuidV4 } from 'uuid';
// import {v4 as myName} from 'uuid';

type taskType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list'); // .getElementById don't has this generic func <>
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

let tasks: taskType[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return;
  // input is no longer null from now on.
  const newTask: taskType = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  addListItem(newTask);
  input.value = ''; // empty after adding 1 task
});

function addListItem(task: taskType) {
  let li = document.createElement('li');
  let label = document.createElement('label');
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = task.completed;
  checkBox.addEventListener('change', () => {
    task.completed = checkBox.checked;
  });
  label.append(checkBox, task.title);
  li.append(label);
  list?.append(li);
  saveTasks();
}

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}
function loadTasks(): taskType[] {
  const taskJson = localStorage.getItem('TASKS');
  if (taskJson == null) return [];
  return JSON.parse(taskJson);
}

export {};
