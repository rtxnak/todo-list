import { pendingIcon, onGoingIcon, FinishedIcon, trashIcon, editIcon, ascendingIcon, descendingIcon } from "../components/Icons"
import Task from "../core/Task";

interface ActionProps {
  tasks: Task;
  statusOnChange: (task: Task, status: string, type: string) => void;
  removeOneTask?: (task: Task) => void;
  tasksSort?: Object;
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

export function tasksSorting(props, type: string) {
  const sortIcon = props.tasksSort.direction === "ascending" ? (ascendingIcon) : (descendingIcon)
  const sortDirection = props.tasksSort.direction === "ascending" ? "descending" : "ascending"
  return (
    <button
      onClick={() => props.setTaskSort?.({ direction: sortDirection, type })}
      className={`
      text-gray-900 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
      {sortIcon}
    </button>
  )
}
