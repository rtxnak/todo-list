import { useContext } from "react";
import { TaskContext } from "../hooks/taskContext";
import Task from "../core/Task";
import { ActionOnPeding, ActionOnOngoing, ActionOnFinished, EditAction, TasksSorting } from "../components/tableActionsButtons"

export default function Table() {

  const { filteredTasks } = useContext(TaskContext)

  function tableHeader() {
    return (
      <tr>
        <th className="p-4"><div className="flex justify-left items-center">
          Task Description{TasksSorting("description")}
        </div></th>
        <th className="p-4"><div className="flex justify-left items-center">
          Status{TasksSorting("status")}
        </div></th>
        <th className="p-4"><div className="flex justify-left items-center">
          Created Date {TasksSorting("date")}
        </div></th>
        <th className="p-4"><div className="flex justify-center items-center">
          Actions
        </div></th>
      </tr>
    )
  }

  function tableActions(task: Task) {
    return (
      task.status === "pending" ? ActionOnPeding(task) : false ||
        task.status === "ongoing" ? ActionOnOngoing(task) : false ||
          task.status === "done" ? ActionOnFinished(task) : false
    )
  }

  function tableBody() {
    return filteredTasks.map((task, i) => {
      return (
        <tr key={task.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td>
            <div className="flex p-4 text-left items-center">
              {task.description}
              {EditAction(task)}
            </div>
          </td>
          <td className="text-left p-4 items-center">{task.status}</td>
          <td className="text-left p-4 items-center">{task.date}</td>
          {tableActions(task)}
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-lime-600 to-purple-800
      `}>
        {tableHeader()}
      </thead>
      <tbody>
        {tableBody()}
      </tbody>
    </table>
  )
}