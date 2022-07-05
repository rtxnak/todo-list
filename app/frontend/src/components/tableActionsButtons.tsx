import { pendingIcon, onGoingIcon, FinishedIcon, trashIcon, editIcon, ascendingIcon, descendingIcon } from "../components/Icons"
import Task from "../core/Task";

interface ActionProps {
  tasks: Task;
  statusOnChange: (task: Task, status: string, type: string) => void
  removeOneTask?: (task: Task) => void
}

export function actionOnPeding(task: Task, props: ActionProps) {
  return (
    <td>
      <div className="flex justify-center">
        <button
          onClick={() => props.statusOnChange?.(task, "ongoing", "status")}
          className={`
      text-yellow-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {onGoingIcon}
        </button>
        <button
          onClick={() => props.statusOnChange?.(task, "done", "status")}
          className={`
      text-green-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {FinishedIcon}
        </button>
        <button
          onClick={() => props.removeOneTask?.(task)}
          className={`
      text-red-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {trashIcon}
        </button>
      </div>
    </td>
  )
}

export function actionOnOngoing(task: Task, props: ActionProps) {
  return (
    <td>
      <div className="flex justify-center">
        <button
          onClick={() => props.statusOnChange?.(task, "pending", "status")}
          className={`
      text-blue-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {pendingIcon}
        </button>
        <button
          onClick={() => props.statusOnChange?.(task, "done", "status")}
          className={`
      text-green-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {FinishedIcon}
        </button>
        <button
          onClick={() => props.removeOneTask?.(task)}
          className={`
      text-red-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {trashIcon}
        </button>
      </div>
    </td>
  )
}

export function actionOnFinished(task: Task, props: ActionProps) {
  return (
    <td>
      <div className="flex justify-center">
        <button
          onClick={() => props.statusOnChange?.(task, "pending", "status")}
          className={`
      text-blue-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {pendingIcon}
        </button>
        <button
          onClick={() => props.statusOnChange?.(task, "ongoing", "status")}
          className={`
      text-yellow-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {onGoingIcon}
        </button>
        <button
          onClick={() => props.removeOneTask?.(task)}
          className={`
      text-red-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {trashIcon}
        </button>
      </div>
    </td>
  )
}

function editDescription(task: Task, props) {
  props.setEditBarVisbile?.(true)
  props.setTaskOnUpdate?.(task)
}


export function editAction(task: Task, props) {
  return (
    <button
      onClick={() => editDescription(task, props)}
      className={`
      text-gray-500 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
      {editIcon}
    </button>
  )
}

export function ascendingSort(props, type: string) {
  return (
    <button
      onClick={() => props.sortAllTasks?.(props.tasks, type)}
      className={`
      text-gray-900 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
      {ascendingIcon}
    </button>
  )
}

export function descendingSort(props) {
  return (
    <button
      className={`
      text-gray-700 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
      {descendingIcon}
    </button>
  )
}