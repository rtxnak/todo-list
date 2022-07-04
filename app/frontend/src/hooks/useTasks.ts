import { useEffect, useState } from "react"
import Task from "../core/Task";
import { getAll, createTask, updateTaskStatusFunc, deleteTask, sortTasks, updateTaskDescriptionFunc } from "../api/noBackEndApi";

export default function useTasks() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [searchedTasks, setsearchedTasks] = useState<Task[]>([])
  const [taskToggle, setTaskToggle] = useState<boolean>(false)
  const [editBarVisbile, setEditBarVisbile] = useState<boolean>(false);
  const [taskOnUpdate, setTaskOnUpdate] = useState<Task>(null)

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

  function updateTaskDescription(updateTask: Task, description: string) {
    const id = updateTask.id
    updateTaskDescriptionFunc(tasks, id, description)
    setTaskToggle(!taskToggle)
  }

  function sortAllTasks(tasks: Task[], type: string) {
    const newTasks = sortTasks(tasks, type);
    setTaskToggle(!taskToggle)
    getAllTasks(newTasks);
  }

  function searchResultTasks(tasks: Task[]){
    setsearchedTasks(tasks)
  }

  return {
    tasks,
    createNewTask,
    updateTaskStatus,
    removeOneTask,
    sortAllTasks,
    editBarVisbile,
    setEditBarVisbile,
    taskOnUpdate,
    setTaskOnUpdate,
    updateTaskDescription,
    searchResultTasks,
    searchedTasks, 
    setsearchedTasks
  }
}