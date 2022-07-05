import { useEffect, useState } from "react"
import Task from "../core/Task";
import { sortTasks } from "../api/noBackEndApi"
import { getAll, createTask, updateTask, deleteTask } from "../api/requests";

export default function useTasks() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [searchedTasks, setsearchedTasks] = useState<Task[]>([])
  const [taskToggle, setTaskToggle] = useState<boolean>(false)
  const [editBarVisbile, setEditBarVisbile] = useState<boolean>(false);
  const [taskOnUpdate, setTaskOnUpdate] = useState<Task>(null)

  useEffect(() => { getAllTasks() }, [taskToggle])

  function getAllTasks() {
    getAll()
      .then((response) => setTasks(response))
      .catch((error) => console.log(error));
  }

  async function createNewTask(taskDescription: string) {
    const date = new Date().toLocaleDateString("pt-BR");
    const newTask = {
      description: taskDescription,
      status: 'pending',
      date,
    }
    createTask(newTask)
      .then(() => setTaskToggle(!taskToggle))
      .catch((error) => console.log(error));
  }

  function updateTaskStatusAndDescription(updatedTask: Task, newInfo: string, type: string) {
    if (type === 'description') {
      const task = {
        id: updatedTask.id,
        description: newInfo,
        date: updatedTask.date,
        status: updatedTask.status
      }
      updateTask(task)
        .then(() => setTaskToggle(!taskToggle))
        .catch((error) => console.log(error));
    }
    if (type === 'status') {
      const task = {
        id: updatedTask.id,
        description: updatedTask.description,
        date: updatedTask.date,
        status: newInfo
      }
      updateTask(task)
        .then(() => setTaskToggle(!taskToggle))
        .catch((error) => console.log(error));
    }
  }

  function removeOneTask(task: Task) {
    const taskD = {
      id: task.id.toString()
    }
    deleteTask(taskD)
      .then(() => setTaskToggle(!taskToggle))
      .catch((error) => console.log(error));
  }

  function sortAllTasks(tasks: Task[], type: string) {
    const newTasks = sortTasks(tasks, type);
    setTasks(newTasks)
    setTaskToggle(!taskToggle)
  }

  function searchResultTasks(tasks: Task[]) {
    setsearchedTasks(tasks)
  }

  return {
    tasks,
    createNewTask,
    removeOneTask,
    sortAllTasks,
    editBarVisbile,
    setEditBarVisbile,
    taskOnUpdate,
    setTaskOnUpdate,
    searchResultTasks,
    searchedTasks,
    setsearchedTasks,
    updateTaskStatusAndDescription
  }
}