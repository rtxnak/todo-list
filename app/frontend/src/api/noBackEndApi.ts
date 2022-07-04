// This component was created to use this application without a back-end 

import Task from "../core/Task"

const tasksArray = [
  new Task('first task', 'pending', '02/02/2009', "as56da65sd5d41"),
  new Task('second task', 'ongoing', '02/02/2009', "2sadyu5d5452353"),
  new Task('third task', 'done', '02/02/2009', "3kjh5k4544")
]

export function getAll(tasks = tasksArray) {
  console.log(tasks)
  return tasks
}

export function createTask(tasks: Task[], newTask: string) {
  const status = "pending";
  const date = new Date().toLocaleDateString("pt-BR");
  const id = tasks.length + Math.random() * 10;
  tasks.push(
    new Task(newTask, status, date, id.toString()),
  )
  return tasks
}

export function updateTaskStatusFunc(tasks: Task[], id: string, newStatus: string) {
  tasks.find(task => task.id == id).status = newStatus
  return tasks
}

export function deleteTask(tasks: Task[], id: string) {
  return tasks.filter(task => task.id !== id)
};

