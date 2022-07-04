import { pendingIcon, onGoingIcon, FinishedIcon, trashIcon } from "../components/Icons"
import Task from "../core/Task";

interface ActionProps {
  tasks: Task;
  statusOnChange: (task: Task, status: string) => void
  removeOneTask?: (task: Task) => void
}

export function actionOnPeding(task: Task, props: ActionProps) {
  return (
    <td>
      <div className="flex justify-center">
        <button
          onClick={() => props.statusOnChange?.(task, "ongoing")}
          className={`
      text-yellow-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {onGoingIcon}
        </button>
        <button
          onClick={() => props.statusOnChange?.(task, "done")}
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
          onClick={() => props.statusOnChange?.(task, "pending")}
          className={`
      text-blue-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {pendingIcon}
        </button>
        <button
          onClick={() => props.statusOnChange?.(task, "done")}
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
          onClick={() => props.statusOnChange?.(task, "pending")}
          className={`
      text-blue-600 rounded-full p-2 m-1
      hover:bg-purple-50
      `}>
          {pendingIcon}
        </button>
        <button
          onClick={() => props.statusOnChange?.(task, "ongoing")}
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