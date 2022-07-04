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
  
  function getAllTasks() {
    const response = getAll(tasks)
    setTasks(response);
  }

  function createNewTask(newTask: string) {
    const newTasks = createTask(tasks, newTask);
    setTasks(newTasks);
    setTaskToggle(!taskToggle)
  }

  function updateTaskStatus(updateTask: Task, status: string) {
    const id = updateTask.id
    const newTasks = updateTaskStatusFunc(tasks, id, status)
    setTasks(newTasks);
    setTaskToggle(!taskToggle)
  }

  function removeOneTask(task: Task) {
    const id = task.id.toString()
    const newTasks = deleteTask(tasks, id);
    setTasks(newTasks);
    setTaskToggle(!taskToggle)
  }

  function updateTaskDescription(updateTask: Task, description: string) {
    const id = updateTask.id
    const newTasks = updateTaskDescriptionFunc(tasks, id, description)
    setTasks(newTasks)
    setTaskToggle(!taskToggle)
  }

  function sortAllTasks(tasks: Task[], type: string) {
    const newTasks = sortTasks(tasks, type);
    setTasks(newTasks)
    setTaskToggle(!taskToggle)
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