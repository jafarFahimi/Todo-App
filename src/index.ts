import { v4 as uuidV4 } from 'uuid';
type taskType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('list'); // .getElementById don't has this generic func <>
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('new-task-title');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return;
  // input is no longer null from now on.
  const newTask : taskType = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  addListItem(newTask);
});

function addListItem(task:taskType){

}

export {};
