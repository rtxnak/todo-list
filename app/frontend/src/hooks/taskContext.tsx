import { createContext, ReactNode, useEffect, useState } from 'react'
import Task from "../core/Task";
import { getAll, createTask, updateTask, deleteTask } from "../api/requests";
import InputAndSearchBar from "../components/InputAndSearchBar"
import EditBar from "../components/EditBar"

type taskSortType = {
  direction: string,
  type: string,
}

type TaskContextProps = {
  children: ReactNode;
}

type TaskContextType = {
  tasks: Task[],
  createNewTask: (taskDescription: string) => void,
  removeOneTask: (task: Task) => void,
  editBarVisbile: boolean,
  setEditBarVisbile: (newState: boolean) => void,
  taskOnUpdate: Task,
  setTaskOnUpdate: (newState: Task) => void,
  updateTaskStatusAndDescription: (updatedTask: Task, newInfo: string, type: string) => void,
  onSearch: boolean,
  setonSearch: (newState: boolean) => void,
  inputText: string,
  setinputText: (newState: string) => void,
  tasksSort: taskSortType,
  setTaskSort: (newState: taskSortType) => void,
  filteredTasks: Task[],
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskContextProvider = ({ children }: TaskContextProps) => {

  const [tasks, setTasks] = useState<Task[]>([])
  const [taskToggle, setTaskToggle] = useState<boolean>(false)
  const [editBarVisbile, setEditBarVisbile] = useState<boolean>(false);
  const [taskOnUpdate, setTaskOnUpdate] = useState<Task>(null)
  const [onSearch, setonSearch] = useState<boolean>(false)
  const [inputText, setinputText] = useState<string>('')
  const [tasksSort, setTaskSort] = useState<taskSortType>({
    direction: "ascending",
    type: "date",
  })

  useEffect(() => {
    const { type, direction } = tasksSort;

    function sortAllTasks(tasks: Task[], type: string) {
      if (direction === "descending") {
        return sortTasksAscending(tasks, type);
      } else if (direction === "ascending") {
        return sortTasksDescending(tasks, type);
      }
    }

    function getAllTasks() {
      getAll()
        .then((response) => sortAllTasks(response, type))
        .then((result) => setTasks(result))
        .catch((error) => console.log(error));
    }
    getAllTasks()
  }, [taskToggle, tasksSort])

  const filteredTasks = onSearch ? tasks.filter((task: { description: string; }) => task.description.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) : tasks

  function createNewTask(taskDescription: string) {
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

  function sortTasksAscending(tasks: Task[], type: string) {
    if (type === "description") {
      const sortedTasks = tasks.sort((a: Task, b: Task) => a.description.localeCompare(b.description))
      return sortedTasks
    }
    if (type === "status") {
      const sortedTasks = tasks.sort((a: Task, b: Task) => a.status.localeCompare(b.status))
      return sortedTasks
    }
    if (type === "date") {
      const sortedTasks = tasks.sort((a: Task, b: Task) => a.date.localeCompare(b.date))
      return sortedTasks
    }
  };

  function sortTasksDescending(tasks: Task[], type: string) {
    if (type === "description") {
      const sortedTasks = tasks.sort((a: Task, b: Task) => b.description.localeCompare(a.description))
      return sortedTasks
    }
    if (type === "status") {
      const sortedTasks = tasks.sort((a: Task, b: Task) => b.status.localeCompare(a.status))
      return sortedTasks
    }
    if (type === "date") {
      const sortedTasks = tasks.sort((a: Task, b: Task) => b.date.localeCompare(a.date))
      return sortedTasks
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createNewTask,
        removeOneTask,
        editBarVisbile,
        setEditBarVisbile,
        taskOnUpdate,
        setTaskOnUpdate,
        updateTaskStatusAndDescription,
        onSearch,
        setonSearch,
        inputText,
        setinputText,
        tasksSort,
        setTaskSort,
        filteredTasks,
      }}
    >
      {
        !editBarVisbile ?
          (<InputAndSearchBar />) :
          (<EditBar />)
      }
      {children}
    </TaskContext.Provider>
  )
}