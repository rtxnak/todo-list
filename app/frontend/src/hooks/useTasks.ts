import { useEffect, useState } from "react"
import Task from "../core/Task";
import { getAll, createTask, updateTaskStatusFunc, deleteTask } from "../api/noBackEndApi";

export default function useTasks() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [taskToggle, setTaskToggle] = useState<boolean>(false)

  useEffect(() => { getAllTasks() }, [])

  function getAllTasks(tasks = undefined) {
    const response = getAll(tasks)
    setTasks(response);
  }

  function createNewTask(newTask: string) {
    createTask(tasks, newTask);
    setTaskToggle(!taskToggle)
    getAllTasks(tasks);
  }

  function updateTaskStatus(updateTask: Task, status: string) {
    const id = updateTask.id
    const newtasks = updateTaskStatusFunc(tasks, id, status)
    setTaskToggle(!taskToggle)
    getAllTasks(newtasks);
  }

  function removeOneTask(task: Task) {
    const id = task.id.toString()
    const newtasks = deleteTask(tasks, id);
    setTaskToggle(!taskToggle)
    getAllTasks(newtasks);
  }


  return {
    tasks,
    createNewTask,
    updateTaskStatus,
    removeOneTask,
  }
}