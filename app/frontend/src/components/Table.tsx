import Task from "../core/Task";
import { actionOnPeding, actionOnOngoing, actionOnFinished, editAction, tasksSorting } from "../components/tableActionsButtons"


interface TableProps {
  tasks: Task[];
  statusOnChange?: (task: Task, status: string, type: string) => void;
  removeOneTask?: (task: Task) => void;
  setEditBarVisbile?: (value: boolean) => void;
  setTaskOnUpdate?: (task: Task) => void;
  tasksSort?: Object;
  setTaskSort?: (sortConfig: Object) => void;

}

export default function Table(props: TableProps) {
  function tableHeader() {
    return (
      <tr>
        <th className="p-4"><div className="flex justify-left items-center">
          Task Description{tasksSorting(props, "description")}
        </div></th>
        <th className="p-4"><div className="flex justify-left items-center">
          Status{tasksSorting(props, "status")}
        </div></th>
        <th className="p-4"><div className="flex justify-left items-center">
          Created Date {tasksSorting(props, "date")}
        </div></th>
        <th className="p-4"><div className="flex justify-center items-center">
          Actions
        </div></th>
      </tr>
    )
  }

  function tableActions(task: Task, props) {
    return (
      task.status === "pending" ? actionOnPeding(task, props) : false ||
        task.status === "ongoing" ? actionOnOngoing(task, props) : false ||
          task.status === "done" ? actionOnFinished(task, props) : false
    )
  }

  function tableBody() {
    return props.tasks?.map((task, i) => {
      return (
        <tr key={task.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td>
            <div className="flex p-4 text-left items-center">
              {task.description}
              {editAction(task, props)}
            </div>
          </td>
          <td className="text-left p-4 items-center">{task.status}</td>
          <td className="text-left p-4 items-center">{task.date}</td>
          {tableActions(task, props)}
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