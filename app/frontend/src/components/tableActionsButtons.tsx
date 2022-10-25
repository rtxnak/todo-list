import { useContext } from "react";
import { pendingIcon, onGoingIcon, FinishedIcon, trashIcon, editIcon, ascendingIcon, descendingIcon } from "../components/Icons"
import Task from "../core/Task";
import { TaskContext } from "../hooks/taskContext";

export function ActionOnPeding(task: Task) {

  const { updateTaskStatusAndDescription, removeOneTask, } = useContext(TaskContext)

  return (
    <td
      data-testid={`status-pending-buttons-on-task-${task.id}`}
    >
      <div className="flex justify-center">
        <button
          onClick={() => updateTaskStatusAndDescription(task, "ongoing", "status")}
          className={`
      text-yellow-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {onGoingIcon}
        </button>
        <button
          onClick={() => updateTaskStatusAndDescription(task, "done", "status")}
          className={`
      text-green-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {FinishedIcon}
        </button>
        <button
          onClick={() => removeOneTask(task)}
          className={`
      text-red-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {trashIcon}
        </button>
      </div>
    </td>
  )
}

export function ActionOnOngoing(task: Task) {

  const { updateTaskStatusAndDescription, removeOneTask, } = useContext(TaskContext)

  return (
    <td
      data-testid={`status-onGoing-buttons-on-task-${task.id}`}
    >
      <div className="flex justify-center">
        <button
          onClick={() => updateTaskStatusAndDescription(task, "pending", "status")}
          className={`
      text-blue-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {pendingIcon}
        </button>
        <button
          onClick={() => updateTaskStatusAndDescription(task, "done", "status")}
          className={`
      text-green-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {FinishedIcon}
        </button>
        <button
          onClick={() => removeOneTask(task)}
          className={`
      text-red-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {trashIcon}
        </button>
      </div>
    </td>
  )
}

export function ActionOnFinished(task: Task) {

  const { updateTaskStatusAndDescription, removeOneTask, } = useContext(TaskContext)

  return (
    <td
      data-testid={`status-done-buttons-on-task-${task.id}`}
    >
      <div className="flex justify-center">
        <button
          onClick={() => updateTaskStatusAndDescription(task, "pending", "status")}
          className={`
      text-blue-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {pendingIcon}
        </button>
        <button
          onClick={() => updateTaskStatusAndDescription(task, "ongoing", "status")}
          className={`
      text-yellow-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {onGoingIcon}
        </button>
        <button
          onClick={() => removeOneTask(task)}
          className={`
      text-red-600 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
          {trashIcon}
        </button>
      </div>
    </td>
  )
}

export function EditAction(task: Task) {

  const { setEditBarVisbile, setTaskOnUpdate } = useContext(TaskContext);

  return (
    <button
      data-testid="edit-button"
      onClick={function () { setEditBarVisbile(true); setTaskOnUpdate(task) }}
      className={`
      text-gray-500 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
      {editIcon}
    </button>
  )
}

export function TasksSorting(type: string) {

  const { tasksSort, setTaskSort } = useContext(TaskContext)

  const sortIcon = tasksSort.direction === "ascending" ? (ascendingIcon) : (descendingIcon)
  const sortDirection = tasksSort.direction === "ascending" ? "descending" : "ascending"
  return (
    <button
      data-testid="sort-button"
      onClick={() => setTaskSort({ direction: sortDirection, type })}
      className={`
      text-gray-900 rounded-full md:p-2 md:m-1
      hover:bg-purple-50
      `}>
      {sortIcon}
    </button>
  )
}
