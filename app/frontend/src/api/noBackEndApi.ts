// This component was created to use this application without a back-end 

import Task from "../core/Task"

const tasksArray = [
  new Task('first task', 'pending', '02/02/2009', "1"),
  new Task('second task', 'ongoing', '02/02/2009', "2"),
  new Task('third task', 'done', '02/02/2009', "3")
]

export function getAll(allTasks = tasksArray) {
  console.log(allTasks)
  return allTasks
}

export function createTask(tasks: Task[], newTask: string) {
  const status = "pending";
  const date = new Date().toLocaleDateString("pt-BR");
  const id = tasks.length + 1;
  return tasks.push(
    new Task(newTask, status, date, id.toString()),
  )
}

export function updateTaskStatusFunc(tasks: Task[], id: string, newStatus: string) {
  tasks.find(task => task.id == id).status = newStatus
  return tasks
}

export function deleteTask(tasks: Task[], id: string) {
  console.log(id);
  return tasks.filter(task => task.id !== id)
};

export function updateTaskDescriptionFunc(tasks: Task[], id: string, newDescription: string) {
  console.log(id);
  console.log(newDescription);
  tasks.find(task => task.id == id).description = newDescription
  return tasks
}

export function sortTasks(tasks: Task[], type: string) {
  if (type === "description") {
    const sortedTasks = tasks.sort((a: Task, b: Task) => a.description.localeCompare(b.description))
    console.log(sortedTasks)
    return(sortedTasks)
  }
  if (type === "status") {
    const sortedTasks = tasks.sort((a: Task, b: Task) => a.status.localeCompare(b.status))
    console.log(sortedTasks)
    return(sortedTasks)
  }
  if (type === "date") {
    const sortedTasks = tasks.sort((a: Task, b: Task) => a.date.localeCompare(b.date))
    console.log(sortedTasks)
    return(sortedTasks)
  }
};
